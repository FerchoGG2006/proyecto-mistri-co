'use client';

import { Users, FileText, Video, Calendar } from 'lucide-react';

const stats = [
    {
        name: 'Total de Usuarios',
        value: '12',
        icon: Users,
        change: '+2',
        changeType: 'positive',
    },
    {
        name: 'Total de Posts',
        value: '24',
        icon: FileText,
        change: '+4',
        changeType: 'positive',
    },
    {
        name: 'Total de Videos',
        value: '18',
        icon: Video,
        change: '+3',
        changeType: 'positive',
    },
    {
        name: 'Total de Eventos',
        value: '8',
        icon: Calendar,
        change: '+1',
        changeType: 'positive',
    },
];

export default function DashboardPage() {
    return (
        <div className="py-6">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
            </div>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8">
                {/* Welcome Message */}
                <div className="mt-4 bg-white overflow-hidden shadow rounded-lg">
                    <div className="px-4 py-5 sm:p-6">
                        <h2 className="text-lg font-medium text-gray-900">
                            Bienvenido al Panel de Administración
                        </h2>
                        <p className="mt-1 text-sm text-gray-500">
                            Aquí puedes gestionar todo el contenido de Mistri&Co
                        </p>
                    </div>
                </div>

                {/* Stats */}
                <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Estadísticas</h3>
                    <dl className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                        {stats.map((stat) => (
                            <div
                                key={stat.name}
                                className="relative bg-white pt-5 px-4 pb-12 sm:pt-6 sm:px-6 shadow rounded-lg overflow-hidden"
                            >
                                <dt>
                                    <div className="absolute bg-blue-500 rounded-md p-3">
                                        <stat.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                    </div>
                                    <p className="ml-16 text-sm font-medium text-gray-500 truncate">
                                        {stat.name}
                                    </p>
                                </dt>
                                <dd className="ml-16 pb-6 flex items-baseline sm:pb-7">
                                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                                    <p
                                        className={`ml-2 flex items-baseline text-sm font-semibold ${stat.changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                                            }`}
                                    >
                                        {stat.change}
                                    </p>
                                </dd>
                            </div>
                        ))}
                    </dl>
                </div>

                {/* Recent Activity */}
                <div className="mt-8">
                    <h3 className="text-lg font-medium text-gray-900 mb-4">Actividad Reciente</h3>
                    <div className="bg-white shadow overflow-hidden sm:rounded-md">
                        <ul className="divide-y divide-gray-200">
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-blue-600 truncate">
                                        Nuevo artículo publicado
                                    </p>
                                    <div className="ml-2 flex-shrink-0 flex">
                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Publicado
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                            Transformación Digital en 2024
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <p>Hace 2 horas</p>
                                    </div>
                                </div>
                            </li>
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-blue-600 truncate">
                                        Nuevo video agregado
                                    </p>
                                    <div className="ml-2 flex-shrink-0 flex">
                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">
                                            Publicado
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                            Liderazgo en Tiempos de Cambio
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <p>Hace 5 horas</p>
                                    </div>
                                </div>
                            </li>
                            <li className="px-4 py-4 sm:px-6">
                                <div className="flex items-center justify-between">
                                    <p className="text-sm font-medium text-blue-600 truncate">
                                        Nuevo evento programado
                                    </p>
                                    <div className="ml-2 flex-shrink-0 flex">
                                        <p className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-yellow-100 text-yellow-800">
                                            Programado
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2 sm:flex sm:justify-between">
                                    <div className="sm:flex">
                                        <p className="flex items-center text-sm text-gray-500">
                                            Taller de Gestión de Equipos
                                        </p>
                                    </div>
                                    <div className="mt-2 flex items-center text-sm text-gray-500 sm:mt-0">
                                        <p>Hace 1 día</p>
                                    </div>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}
