'use client';

import { UserPlus } from 'lucide-react';

export default function UsersPage() {
    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <div className="md:flex md:items-center md:justify-between">
                    <div className="flex-1 min-w-0">
                        <h1 className="text-2xl font-semibold text-gray-900">Gestión de Usuarios</h1>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <button
                            type="button"
                            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
                        >
                            <UserPlus className="mr-2 h-4 w-4" />
                            Nuevo Usuario
                        </button>
                    </div>
                </div>

                <div className="mt-8 bg-white shadow overflow-hidden sm:rounded-lg">
                    <div className="px-4 py-5 sm:p-6 text-center">
                        <p className="text-gray-500">Contenido en desarrollo...</p>
                    </div>
                </div>
            </div>
        </div>
    );
}
