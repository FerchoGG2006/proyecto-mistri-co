"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  FileText, 
  Video, 
  Calendar,
  Settings,
  LogOut,
  Menu,
  X,
  BarChart3,
  Users
} from 'lucide-react';

interface AdminLayoutProps {
  children: React.ReactNode;
}

export default function AdminLayout({ children }: AdminLayoutProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  // Verificar autenticación
  useEffect(() => {
    const token = localStorage.getItem('admin_token');
    const authenticated = !!token;
    setIsAuthenticated(authenticated);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('admin_token');
    setIsAuthenticated(false);
    router.push('/admin/auth');
  };

  const navigation = [
    { name: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
    { name: 'Blogs', href: '/admin/blog', icon: FileText },
    { name: 'Videos', href: '/admin/videos', icon: Video },
    { name: 'Charlas', href: '/admin/charlas', icon: Calendar },
    { name: 'Estadísticas', href: '/admin/stats', icon: BarChart3 },
    { name: 'Usuarios', href: '/admin/users', icon: Users },
    { name: 'Configuración', href: '/admin/settings', icon: Settings },
  ];

  // Si estamos en la página de auth, mostrar solo el contenido sin layout
  if (pathname === '/admin/auth') {
    return <>{children}</>;
  }

  // Si no está autenticado, redirigir al login
  if (!isAuthenticated) {
    router.push('/admin/auth');
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-mistri-blue-500 mx-auto"></div>
          <p className="mt-4 text-gray-600">Redirigiendo al login...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Sidebar para desktop */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
        <div className="flex min-h-0 flex-1 flex-col bg-mistri-blue-900">
          <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
            <div className="flex flex-shrink-0 items-center px-4">
              <h1 className="text-xl font-bold text-white">Mistri&Co Admin</h1>
            </div>
            <nav className="mt-5 flex-1 space-y-1 px-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive
                        ? 'bg-mistri-blue-800 text-white'
                        : 'text-gray-300 hover:bg-mistri-blue-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
                  >
                    <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-mistri-blue-700 p-4">
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

      {/* Sidebar móvil */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
        <div className="relative flex w-full max-w-xs flex-1 flex-col bg-mistri-blue-900">
          <div className="absolute top-0 right-0 -mr-12 pt-2">
            <button
              type="button"
              className="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              onClick={() => setSidebarOpen(false)}
            >
              <X className="h-6 w-6 text-white" />
            </button>
          </div>
          <div className="flex flex-shrink-0 items-center px-4 pt-5">
            <h1 className="text-xl font-bold text-white">Mistri&Co Admin</h1>
          </div>
          <div className="mt-5 h-0 flex-1 overflow-y-auto">
            <nav className="space-y-1 px-2">
              {navigation.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    href={item.href}
                    className={`${
                      isActive
                        ? 'bg-mistri-blue-800 text-white'
                        : 'text-gray-300 hover:bg-mistri-blue-700 hover:text-white'
                    } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                    onClick={() => setSidebarOpen(false)}
                  >
                    <item.icon className="mr-4 h-6 w-6 flex-shrink-0" />
                    {item.name}
                  </Link>
                );
              })}
            </nav>
          </div>
          <div className="flex flex-shrink-0 border-t border-mistri-blue-700 p-4">
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

      {/* Contenido principal */}
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Header móvil */}
        <div className="sticky top-0 z-10 md:hidden pl-1 pt-1 sm:pl-3 sm:pt-3 bg-gray-50">
          <button
            type="button"
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-mistri-blue-500"
            onClick={() => setSidebarOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Contenido */}
        <main className="flex-1">
          {children}
        </main>
      </div>
    </div>
  );
}
