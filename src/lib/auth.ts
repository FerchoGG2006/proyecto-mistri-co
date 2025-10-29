// auth.ts
export const ADMIN_CREDENTIALS = {
  email: 'admin@mistri.com',
  password: 'Mistri2024!Admin',
};

const TOKEN_KEY = 'mistri_admin_token';
const TOKEN_VAL = 'mistri_secure_admin_2024_token';

export function validateCredentials(email: string, password: string): boolean {
  // Validación más estricta
  const emailMatch = email.toLowerCase().trim() === ADMIN_CREDENTIALS.email.toLowerCase();
  const passwordMatch = password === ADMIN_CREDENTIALS.password;
  
  return emailMatch && passwordMatch;
}

export function setAuthToken(): void {
  if (typeof document !== 'undefined') {
    // Cookie que expira en 8 horas (más seguro)
    const expires = new Date();
    expires.setTime(expires.getTime() + (8 * 60 * 60 * 1000));
    document.cookie = `${TOKEN_KEY}=${TOKEN_VAL}; expires=${expires.toUTCString()}; path=/admin; secure; samesite=strict`;
  }
}

export function removeAuthToken(): void {
  if (typeof document !== 'undefined') {
    document.cookie = `${TOKEN_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/admin;`;
  }
}

export function getAuthToken(): string | null {
  if (typeof document === 'undefined') return null;
  
  try {
    const cookies = document.cookie.split(';');
    const tokenCookie = cookies.find(cookie => cookie.trim().startsWith(`${TOKEN_KEY}=`));
    return tokenCookie ? tokenCookie.split('=')[1] : null;
  } catch (error) {
    console.error('Error reading auth token:', error);
    return null;
  }
}

export function isAuthenticated(): boolean {
  if (typeof document === 'undefined') return false;
  
  try {
    const token = getAuthToken();
    return token === TOKEN_VAL;
  } catch (error) {
    console.error('Error checking authentication:', error);
    return false;
  }
}
