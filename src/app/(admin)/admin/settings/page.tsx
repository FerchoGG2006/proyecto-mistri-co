'use client';

import { Save } from 'lucide-react';

export default function SettingsPage() {
    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Configuración</h1>

                <div className="mt-6 space-y-6">
                    {/* General Settings */}
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                Configuración General
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="site-name" className="block text-sm font-medium text-gray-700">
                                        Nombre del Sitio
                                    </label>
                                    <input
                                        type="text"
                                        name="site-name"
                                        id="site-name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        defaultValue="Mistri&Co"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="site-description" className="block text-sm font-medium text-gray-700">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="site-description"
                                        name="site-description"
                                        rows={3}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        defaultValue="Consultora argentina especializada en transformación organizacional"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                                        Email de Contacto
                                    </label>
                                    <input
                                        type="email"
                                        name="contact-email"
                                        id="contact-email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        defaultValue="contacto@mistri.com"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    <Save className="mr-2 h-4 w-4" />
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* SEO Settings */}
                    <div className="bg-white shadow overflow-hidden sm:rounded-lg">
                        <div className="px-4 py-5 sm:p-6">
                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">
                                Configuración SEO
                            </h3>

                            <div className="space-y-4">
                                <div>
                                    <label htmlFor="meta-title" className="block text-sm font-medium text-gray-700">
                                        Meta Título
                                    </label>
                                    <input
                                        type="text"
                                        name="meta-title"
                                        id="meta-title"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        defaultValue="Mistri&Co - Consultora Especializada"
                                    />
                                </div>

                                <div>
                                    <label htmlFor="meta-keywords" className="block text-sm font-medium text-gray-700">
                                        Palabras Clave
                                    </label>
                                    <input
                                        type="text"
                                        name="meta-keywords"
                                        id="meta-keywords"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        defaultValue="consultora, transformación, liderazgo"
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                                >
                                    <Save className="mr-2 h-4 w-4" />
                                    Guardar Cambios
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
