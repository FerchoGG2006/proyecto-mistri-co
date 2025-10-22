"use client";

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { isAuthenticated } from '@/lib/auth';

export default function AdminPage() {
  const router = useRouter();

  useEffect(() => {
    // Verificar autenticación y redirigir
    if (isAuthenticated()) {
      router.push('/admin/dashboard');
    } else {
      router.push('/admin/login');
    }
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <p className="text-gray-600">Redirigiendo...</p>
      </div>
    </div>
  );
}
