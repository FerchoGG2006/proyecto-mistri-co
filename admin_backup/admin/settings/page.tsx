'use client';

import { useState, useEffect } from 'react';
import { Save } from 'lucide-react';
import { useLanguage } from '@/hooks/use-language';
import { getSettings, updateSettings } from '../actions';

export default function SettingsPage() {
    const { t } = useLanguage();
    const [settings, setSettings] = useState({
        siteName: '',
        description: '',
        contactEmail: '',
        metaTitle: '',
        metaKeywords: ''
    });
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchSettings = async () => {
            setLoading(true);
            try {
                const data = await getSettings();
                setSettings(data);
            } catch (error) {
                console.error('Error fetching settings:', error);
            }
            setLoading(false);
        };
        fetchSettings();
    }, []);

    const handleSave = async () => {
        try {
            await updateSettings(settings);
            alert('Configuración guardada exitosamente');
        } catch (error) {
            console.error('Error saving settings:', error);
            alert('Error al guardar la configuración. Verifica la conexión a la base de datos.');
        }
    };

    if (loading) {
        return <div className="p-8 text-center text-gray-500">Cargando configuración...</div>;
    }

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
                                        id="site-name"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={settings.siteName}
                                        onChange={(e) => setSettings({ ...settings, siteName: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="site-description" className="block text-sm font-medium text-gray-700">
                                        Descripción
                                    </label>
                                    <textarea
                                        id="site-description"
                                        rows={3}
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={settings.description}
                                        onChange={(e) => setSettings({ ...settings, description: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="contact-email" className="block text-sm font-medium text-gray-700">
                                        Email de Contacto
                                    </label>
                                    <input
                                        type="email"
                                        id="contact-email"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={settings.contactEmail}
                                        onChange={(e) => setSettings({ ...settings, contactEmail: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    onClick={handleSave}
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
                                        id="meta-title"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={settings.metaTitle}
                                        onChange={(e) => setSettings({ ...settings, metaTitle: e.target.value })}
                                    />
                                </div>

                                <div>
                                    <label htmlFor="meta-keywords" className="block text-sm font-medium text-gray-700">
                                        Palabras Clave
                                    </label>
                                    <input
                                        type="text"
                                        id="meta-keywords"
                                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm py-2 px-3 focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm"
                                        value={settings.metaKeywords}
                                        onChange={(e) => setSettings({ ...settings, metaKeywords: e.target.value })}
                                    />
                                </div>
                            </div>

                            <div className="mt-6">
                                <button
                                    type="button"
                                    onClick={handleSave}
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
