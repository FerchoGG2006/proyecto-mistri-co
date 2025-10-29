'use client';

import dynamic from 'next/dynamic';

const AdminLoginClient = dynamic(() => import('./admin-login-client'), {
  loading: () => <div>Loading...</div>,
  ssr: false,
});

export default function AdminLoginPage() {
  return <AdminLoginClient />;
}