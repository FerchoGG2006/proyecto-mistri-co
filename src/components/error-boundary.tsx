'use client';

import React from 'react';

interface ErrorBoundaryState {
  hasError: boolean;
  error?: Error;
  retryCount: number;
}

interface ErrorBoundaryProps {
  children: React.ReactNode;
  fallback?: React.ComponentType<{ error?: Error; retry: () => void }>;
}

class ErrorBoundary extends React.Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private retryTimeoutId: NodeJS.Timeout | null = null;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = {
      hasError: false,
      retryCount: 0,
    };
  }

  static getDerivedStateFromError(error: Error): ErrorBoundaryState {
    return {
      hasError: true,
      error,
      retryCount: 0,
    };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('ErrorBoundary caught an error:', error, errorInfo);
    
    // Auto-retry for chunk loading errors
    if (this.isChunkLoadError(error)) {
      this.autoRetry();
    }
  }

  private isChunkLoadError(error: Error): boolean {
    return (
      error.name === 'ChunkLoadError' ||
      error.message.includes('Loading chunk') ||
      error.message.includes('Loading CSS chunk') ||
      error.message.includes('timeout')
    );
  }

  private autoRetry = () => {
    const { retryCount } = this.state;
    const maxRetries = 3;
    
    if (retryCount < maxRetries) {
      // Clear any existing timeout
      if (this.retryTimeoutId) {
        clearTimeout(this.retryTimeoutId);
      }
      
      // Wait before retrying (exponential backoff)
      const delay = Math.min(1000 * Math.pow(2, retryCount), 5000);
      
      this.retryTimeoutId = setTimeout(() => {
        this.setState(
          (prevState) => ({
            hasError: false,
            retryCount: prevState.retryCount + 1,
          }),
          () => {
            // Force a page reload for chunk errors
            if (this.isChunkLoadError(this.state.error!)) {
              window.location.reload();
            }
          }
        );
      }, delay);
    }
  };

  private handleRetry = () => {
    this.setState({ hasError: false, retryCount: 0 });
    
    // Force a page reload for chunk errors
    if (this.state.error && this.isChunkLoadError(this.state.error)) {
      window.location.reload();
    }
  };

  componentWillUnmount() {
    if (this.retryTimeoutId) {
      clearTimeout(this.retryTimeoutId);
    }
  }

  render() {
    if (this.state.hasError) {
      const { fallback: Fallback } = this.props;
      
      if (Fallback) {
        return <Fallback error={this.state.error} retry={this.handleRetry} />;
      }

      return (
        <div className="min-h-screen flex items-center justify-center bg-gray-50">
          <div className="max-w-md w-full bg-white shadow-lg rounded-lg p-6">
            <div className="flex items-center justify-center w-12 h-12 mx-auto bg-red-100 rounded-full mb-4">
              <svg className="w-6 h-6 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-2.5L13.732 4c-.77-.833-1.732-.833-2.464 0L4.35 16.5c-.77.833.192 2.5 1.732 2.5z" />
              </svg>
            </div>
            
            <h1 className="text-lg font-semibold text-gray-900 text-center mb-2">
              Error de Carga
            </h1>
            
            <p className="text-sm text-gray-600 text-center mb-6">
              {this.isChunkLoadError(this.state.error!) 
                ? 'Hubo un problema cargando la aplicación. Intentando solucionarlo automáticamente...'
                : 'Algo salió mal. Por favor, inténtalo de nuevo.'
              }
            </p>
            
            {this.state.retryCount > 0 && (
              <p className="text-xs text-gray-500 text-center mb-4">
                Intento {this.state.retryCount} de 3
              </p>
            )}
            
            <button
              onClick={this.handleRetry}
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              Reintentar
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
