'use client';

import { useState, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { LogIn, ArrowLeft } from 'lucide-react';

export default function LoginPage() {
    const router = useRouter();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [isLoading, setIsLoading] = useState(false);

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        setError('');
        setIsLoading(true);

        try {
            // TODO: Replace with actual API call
            // For now, using simple validation
            if (email === 'contacto@mistriconsultora.com' && password === 'admin123') {
                // Store token (in production, this would come from the API)
                localStorage.setItem('admin_token', 'demo_token_' + Date.now());
                router.push('/admin/dashboard');
            } else {
                setError('Credenciales incorrectas');
            }
        } catch (err) {
            setError('Error interno. Intenta nuevamente.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-900 via-blue-800 to-blue-900 flex flex-col justify-center py-12 sm:px-6 lg:px-8">
            <div className="sm:mx-auto sm:w-full sm:max-w-md">
                {/* Logo */}
                <div className="flex justify-center">
                    <Image
                        src="/mistri_white_onlyM.png"
                        alt="Mistri&Co"
                        width={120}
                        height={120}
                        className="w-30 h-auto object-contain"
                    />
                </div>

                <h2 className="mt-6 text-center text-3xl font-extrabold text-white">
                    Panel de Administración
                </h2>
                <p className="mt-2 text-center text-sm text-blue-200">
                    Ingresa tus credenciales para acceder
                </p>
            </div>

            <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
                <div className="bg-white py-8 px-4 shadow-2xl sm:rounded-lg sm:px-10">
                    <form className="space-y-6" onSubmit={handleSubmit}>
                        {error && (
                            <div className="bg-red-50 border border-red-200 text-red-600 px-4 py-3 rounded-md text-sm">
                                {error}
                            </div>
                        )}

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                                Email
                            </label>
                            <div className="mt-1">
                                <input
                                    id="email"
                                    name="email"
                                    type="email"
                                    autoComplete="email"
                                    required
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="contacto@mistriconsultora.com"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                                Contraseña
                            </label>
                            <div className="mt-1">
                                <input
                                    id="password"
                                    name="password"
                                    type="password"
                                    autoComplete="current-password"
                                    required
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div>
                            <button
                                type="submit"
                                disabled={isLoading}
                                className="w-full flex justify-center items-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                            >
                                {isLoading ? (
                                    'Cargando...'
                                ) : (
                                    <>
                                        <LogIn className="mr-2 h-4 w-4" />
                                        Iniciar Sesión
                                    </>
                                )}
                            </button>
                        </div>
                    </form>

                    <div className="mt-6">
                        <div className="relative">
                            <div className="absolute inset-0 flex items-center">
                                <div className="w-full border-t border-gray-300" />
                            </div>
                            <div className="relative flex justify-center text-sm">
                                <span className="px-2 bg-white text-gray-500">
                                    Credenciales de prueba
                                </span>
                            </div>
                        </div>

                        <div className="mt-4 text-sm text-gray-600 bg-gray-50 p-4 rounded-md">
                            <p className="font-medium mb-2">Para desarrollo:</p>
                            <p>Email: <code className="bg-white px-2 py-1 rounded">contacto@mistriconsultora.com</code></p>
                            <p>Contraseña: <code className="bg-white px-2 py-1 rounded">admin123</code></p>
                        </div>
                    </div>

                    <div className="mt-6">
                        <Link
                            href="/"
                            className="flex items-center justify-center text-sm text-blue-600 hover:text-blue-500"
                        >
                            <ArrowLeft className="mr-2 h-4 w-4" />
                            Volver al sitio
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}
