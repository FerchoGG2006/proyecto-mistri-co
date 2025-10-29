"use client";

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { 
  LayoutDashboard, 
  LogOut,
  Menu,
  X,
  FileText,
  Video,
  Calendar,
  Settings,
  Users,
  Image
} from 'lucide-react';
import { isAuthenticated, removeAuthToken } from '@/lib/auth';
import { useTranslations } from 'next-intl';

interface AdminLayoutClientProps {
  children: React.ReactNode;
}

export default function AdminLayoutClient({ children }: AdminLayoutClientProps) {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();
  const t = useTranslations('admin.sidebar');

  const handleLogout = () => {
    removeAuthToken();
    router.replace('/admin/login');
  };

  // Si estamos en login, mostrar solo el contenido sin verificar auth
  if (pathname === '/admin/login' || pathname === '/admin/login/') {
    return <>{children}</>;
  }

  // El middleware ya maneja la autenticación, así que si llegamos aquí es porque estamos autenticados

  return (
    <div className="min-h-screen bg-gray-50 relative">
      {/* Sidebar */}
      <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col z-10">
        <div className="flex min-h-0 flex-1 flex-col bg-blue-900">
          <div className="flex flex-1 flex-col overflow-y-auto pt-1 pb-1">
            <div className="flex flex-shrink-0 items-center justify-center">
              <img 
                src="/mistri_white_onlyM.png" 
                alt="Mistri&Co" 
                className="w-32 h-auto object-contain"
              />
            </div>
            <nav className="mt-1 flex-1 space-y-1 px-2">
              <Link
                href="/admin/dashboard"
                className={`${
                  pathname === '/admin/dashboard'
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <LayoutDashboard className="mr-3 h-5 w-5 flex-shrink-0" />
                {t('dashboard')}
              </Link>
              <Link
                href="/admin/blog"
                className={`${
                  pathname.startsWith('/admin/blog')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <FileText className="mr-3 h-5 w-5 flex-shrink-0" />
                {t('blog')}
              </Link>
              <Link
                href="/admin/videos"
                className={`${
                  pathname.startsWith('/admin/videos')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <Video className="mr-3 h-5 w-5 flex-shrink-0" />
                {t('videos')}
              </Link>
              <Link
                href="/admin/charlas"
                className={`${
                  pathname.startsWith('/admin/charlas')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <Calendar className="mr-3 h-5 w-5 flex-shrink-0" />
                {t('charlas')}
              </Link>
              <Link
                href="/admin/media"
                className={`${
                  pathname.startsWith('/admin/media')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <Image className="mr-3 h-5 w-5 flex-shrink-0" />
                {t('media')}
              </Link>
              <Link
                href="/admin/users"
                className={`${
                  pathname.startsWith('/admin/users')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <Users className="mr-3 h-5 w-5 flex-shrink-0" />
                {t('users')}
              </Link>
              <Link
                href="/admin/settings"
                className={`${
                  pathname.startsWith('/admin/settings')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-sm font-medium rounded-md`}
              >
                <Settings className="mr-3 h-5 w-5 flex-shrink-0" />
                {t('settings')}
              </Link>
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
                    {t('logout')}
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
            className="-ml-0.5 -mt-0.5 h-12 w-12 inline-flex items-center justify-center rounded-md text-gray-500 hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
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

      {/* Sidebar móvil */}
      <div className={`fixed inset-0 flex z-40 md:hidden ${sidebarOpen ? '' : 'hidden'}`}>
        <div className="fixed inset-0 bg-gray-600 bg-opacity-75" onClick={() => setSidebarOpen(false)} />
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
            <img 
              src="/mistri_white_onlyM.png" 
              alt="Mistri&Co" 
              className="w-32 h-auto object-contain"
            />
          </div>
          <div className="mt-5 h-0 flex-1 overflow-y-auto">
            <nav className="space-y-1 px-2">
              <Link
                href="/admin/dashboard"
                className={`${
                  pathname === '/admin/dashboard'
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                onClick={() => setSidebarOpen(false)}
              >
                <LayoutDashboard className="mr-4 h-6 w-6 flex-shrink-0" />
                {t('dashboard')}
              </Link>
              <Link
                href="/admin/blog"
                className={`${
                  pathname.startsWith('/admin/blog')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                onClick={() => setSidebarOpen(false)}
              >
                <FileText className="mr-4 h-6 w-6 flex-shrink-0" />
                {t('blog')}
              </Link>
              <Link
                href="/admin/videos"
                className={`${
                  pathname.startsWith('/admin/videos')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                onClick={() => setSidebarOpen(false)}
              >
                <Video className="mr-4 h-6 w-6 flex-shrink-0" />
                {t('videos')}
              </Link>
              <Link
                href="/admin/charlas"
                className={`${
                  pathname.startsWith('/admin/charlas')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                onClick={() => setSidebarOpen(false)}
              >
                <Calendar className="mr-4 h-6 w-6 flex-shrink-0" />
                {t('charlas')}
              </Link>
              <Link
                href="/admin/users"
                className={`${
                  pathname.startsWith('/admin/users')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                onClick={() => setSidebarOpen(false)}
              >
                <Users className="mr-4 h-6 w-6 flex-shrink-0" />
                {t('users')}
              </Link>
              <Link
                href="/admin/settings"
                className={`${
                  pathname.startsWith('/admin/settings')
                    ? 'bg-blue-800 text-white'
                    : 'text-gray-300 hover:bg-blue-700 hover:text-white'
                } group flex items-center px-2 py-2 text-base font-medium rounded-md`}
                onClick={() => setSidebarOpen(false)}
              >
                <Settings className="mr-4 h-6 w-6 flex-shrink-0" />
                {t('settings')}
              </Link>
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
                    {t('logout')}
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
