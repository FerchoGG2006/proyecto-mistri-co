'use client'

import { toast } from "sonner"
import { CheckCircle, XCircle, AlertCircle, Info, Loader2 } from "lucide-react"
import { cn } from "@/lib/utils"

interface ToastOptions {
  title?: string
  description?: string
  action?: {
    label: string
    onClick: () => void
  }
  duration?: number
  className?: string
}

const toastVariants = {
  success: {
    icon: CheckCircle,
    className: "border-green-200 bg-green-50 text-green-900"
  },
  error: {
    icon: XCircle,
    className: "border-red-200 bg-red-50 text-red-900"
  },
  warning: {
    icon: AlertCircle,
    className: "border-yellow-200 bg-yellow-50 text-yellow-900"
  },
  info: {
    icon: Info,
    className: "border-blue-200 bg-blue-50 text-blue-900"
  }
}

export const customToast = {
  success: (message: string, options?: ToastOptions) => {
    return toast.success(message, {
      ...options,
      icon: <CheckCircle className="h-4 w-4 text-green-500" />,
      className: cn(toastVariants.success.className, options?.className)
    })
  },

  error: (message: string, options?: ToastOptions) => {
    return toast.error(message, {
      ...options,
      icon: <XCircle className="h-4 w-4 text-red-500" />,
      className: cn(toastVariants.error.className, options?.className)
    })
  },

  warning: (message: string, options?: ToastOptions) => {
    return toast.warning(message, {
      ...options,
      icon: <AlertCircle className="h-4 w-4 text-yellow-500" />,
      className: cn(toastVariants.warning.className, options?.className)
    })
  },

  info: (message: string, options?: ToastOptions) => {
    return toast.info(message, {
      ...options,
      icon: <Info className="h-4 w-4 text-blue-500" />,
      className: cn(toastVariants.info.className, options?.className)
    })
  },

  loading: (message: string, options?: ToastOptions) => {
    return toast.loading(message, {
      ...options,
      icon: <Loader2 className="h-4 w-4 animate-spin text-mistri-blue-500" />,
      className: cn("border-gray-200 bg-gray-50 text-gray-900", options?.className)
    })
  },

  dismiss: (toastId?: string | number) => {
    return toast.dismiss(toastId)
  },

  promise: <T,>(
    promise: Promise<T>,
    {
      loading,
      success,
      error,
    }: {
      loading: string
      success: string | ((data: T) => string)
      error: string | ((error: unknown) => string)
    }
  ) => {
    return toast.promise(promise, {
      loading: loading,
      success: (data) => typeof success === 'function' ? success(data) : success,
      error: (err) => typeof error === 'function' ? error(err) : error
    })
  }
}

// Hook para usar toast con contexto
export function useToast() {
  return {
    success: customToast.success,
    error: customToast.error,
    warning: customToast.warning,
    info: customToast.info,
    loading: customToast.loading,
    dismiss: customToast.dismiss,
    promise: customToast.promise
  }
}

// Componente de toast personalizado
export function CustomToast({
  title,
  description,
  variant = "info",
  action,
  onClose,
  className
}: {
  title: string
  description?: string
  variant?: keyof typeof toastVariants
  action?: {
    label: string
    onClick: () => void
  }
  onClose?: () => void
  className?: string
}) {
  const variantConfig = toastVariants[variant]
  const Icon = variantConfig.icon

  return (
    <div className={cn(
      "flex items-start space-x-3 p-4 rounded-lg border shadow-sm",
      variantConfig.className,
      className
    )}>
      <Icon className="h-5 w-5 mt-0.5 flex-shrink-0" />
      <div className="flex-1 min-w-0">
        <div className="font-medium">{title}</div>
        {description && (
          <div className="text-sm opacity-90 mt-1">{description}</div>
        )}
        {action && (
          <button
            onClick={action.onClick}
            className="mt-2 text-sm font-medium underline hover:no-underline"
          >
            {action.label}
          </button>
        )}
      </div>
      {onClose && (
        <button
          onClick={onClose}
          className="flex-shrink-0 p-1 rounded-md hover:bg-black/5 transition-colors"
        >
          ×
        </button>
      )}
    </div>
  )
}