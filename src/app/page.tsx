import { redirect } from 'next/navigation';

export default function Home() {
  // Redirigir a la versión en español por defecto
  redirect('/es');
}