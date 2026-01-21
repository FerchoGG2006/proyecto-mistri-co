'use client';

import { usePathname, useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
    LayoutDashboard,
    FileText,
    Video,
    Calendar,
    Image as ImageIcon,
    Users,
    Settings,
    LogOut,
    Menu,
    X
} from 'lucide-react';

const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Blog', href: '/admin/blog', icon: FileText },
    { name: 'Videos', href: '/admin/videos', icon: Video },
    { name: 'Charlas', href: '/admin/charlas', icon: Calendar },
    { name: 'Medios', href: '/admin/media', icon: ImageIcon },
    { name: 'Usuarios', href: '/admin/users', icon: Users },
    { name: 'Configuración', href: '/admin/settings', icon: Settings },
];

export default function AdminLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const pathname = usePathname();
    const router = useRouter();
    const [sidebarOpen, setSidebarOpen] = useState(false);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Check if user is authenticated
        const checkAuth = () => {
            const token = localStorage.getItem('admin_token');
            if (!token && pathname !== '/admin/login') {
                router.push('/admin/login');
            } else if (token) {
                setIsAuthenticated(true);
            }
            setIsLoading(false);
        };

        checkAuth();
    }, [pathname, router]);

    const handleLogout = () => {
        localStorage.removeItem('admin_token');
        router.push('/admin/login');
    };

    // Don't show layout on login page
    if (pathname === '/admin/login') {
        return <>{children}</>;
    }

    if (isLoading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <p className="text-gray-600">Cargando...</p>
                </div>
            </div>
        );
    }

    if (!isAuthenticated) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50 relative">
            {/* Desktop Sidebar */}
            <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col z-10">
                <div className="flex min-h-0 flex-1 flex-col bg-blue-900">
                    <div className="flex flex-1 flex-col overflow-y-auto pt-1 pb-1">
                        {/* Logo */}
                        <div className="flex flex-shrink-0 items-center justify-center">
                            <Image
                                src="/mistri_white_onlyM.png"
                                alt="Mistri&Co"
                                width={128}
                                height={128}
                                className="w-32 h-auto object-contain"
                            />
                        </div>

                        {/* Navigation */}
                        <nav className="mt-1 flex-1 space-y-1 px-2">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`
                      group flex items-center px-2 py-2 text-sm font-medium rounded-md
                      ${isActive
                                                ? 'bg-blue-700 text-white'
                                                : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                                            }
                    `}
                                    >
                                        <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    {/* Logout Button */}
                    <div className="flex flex-shrink-0 border-t border-blue-700 p-4">
                        <button
                            onClick={handleLogout}
                            className="group block w-full flex-shrink-0"
                        >
                            <div className="flex items-center">
                                <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                                        Cerrar Sesión
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>

            {/* Main Content */}
            <div className="md:pl-64 flex flex-col flex-1">
                {/* Mobile menu button */}
                <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-50">
                    <button
                        type="button"
                        className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                        onClick={() => setSidebarOpen(true)}
                    >
                        <Menu className="h-6 w-6" />
                    </button>
                </div>

                {/* Page Content */}
                <main className="flex-1">
                    {children}
                </main>
            </div>

            {/* Mobile Sidebar */}
            <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? '' : 'hidden'}`}>
                <div
                    className="fixed inset-0 bg-gray-600 bg-opacity-75"
                    onClick={() => setSidebarOpen(false)}
                />
                <div className="relative flex w-full max-w-xs flex-1 flex-col bg-blue-900">
                    <div className="absolute top-0 right-0 -mr-12 pt-2">
                        <button
                            type="button"
                            className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                            onClick={() => setSidebarOpen(false)}
                        >
                            <X className="h-6 w-6 text-white" />
                        </button>
                    </div>

                    <div className="flex flex-shrink-0 items-center justify-center">
                        <Image
                            src="/mistri_white_onlyM.png"
                            alt="Mistri&Co"
                            width={128}
                            height={128}
                            className="w-32 h-auto object-contain"
                        />
                    </div>

                    <div className="mt-5 h-0 flex-1 overflow-y-auto">
                        <nav className="space-y-1 px-2">
                            {navigation.map((item) => {
                                const isActive = pathname === item.href;
                                return (
                                    <Link
                                        key={item.name}
                                        href={item.href}
                                        className={`
                      group flex items-center px-2 py-2 text-base font-medium rounded-md
                      ${isActive
                                                ? 'bg-blue-700 text-white'
                                                : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                                            }
                    `}
                                        onClick={() => setSidebarOpen(false)}
                                    >
                                        <item.icon className="mr-4 h-6 w-6 flex-shrink-0" />
                                        {item.name}
                                    </Link>
                                );
                            })}
                        </nav>
                    </div>

                    <div className="flex flex-shrink-0 border-t border-blue-700 p-4">
                        <button
                            onClick={handleLogout}
                            className="group block w-full flex-shrink-0"
                        >
                            <div className="flex items-center">
                                <LogOut className="mr-3 h-5 w-5 text-gray-400 group-hover:text-gray-300" />
                                <div className="ml-3">
                                    <p className="text-sm font-medium text-gray-400 group-hover:text-gray-300">
                                        Cerrar Sesión
                                    </p>
                                </div>
                            </div>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
