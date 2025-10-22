// Sistema de autenticación simple para el panel de administración

export const ADMIN_CREDENTIALS = {
  email: 'admin@mistri.com',
  password: 'admin123'
};

export function validateCredentials(email: string, password: string): boolean {
  return email === ADMIN_CREDENTIALS.email && password === ADMIN_CREDENTIALS.password;
}

export function setAuthToken(): void {
  if (typeof document !== 'undefined') {
    document.cookie = 'admin_token=mistri_admin_2024; path=/; max-age=86400'; // 24 horas
  }
}

export function removeAuthToken(): void {
  if (typeof document !== 'undefined') {
    document.cookie = 'admin_token=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT';
  }
}

export function getAuthToken(): string | null {
  if (typeof document === 'undefined') return null;
  
  const cookies = document.cookie.split(';');
  const tokenCookie = cookies.find(cookie => cookie.trim().startsWith('admin_token='));
  
  if (tokenCookie) {
    return tokenCookie.split('=')[1];
  }
  
  return null;
}

export function isAuthenticated(): boolean {
  const token = getAuthToken();
  return token === 'mistri_admin_2024';
}
