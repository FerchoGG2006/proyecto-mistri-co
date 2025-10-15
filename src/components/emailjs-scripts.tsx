'use client';

import { useEffect } from 'react';

export default function EmailJSScripts() {
  useEffect(() => {
    // Cargar EmailJS dinámicamente
    const loadEmailJS = () => {
      if (typeof window !== 'undefined' && !window.emailjs) {
        const script = document.createElement('script');
        script.src = 'https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js';
        script.async = true;
        script.onload = () => {
          // Cargar configuración después de que EmailJS esté listo
          const configScript = document.createElement('script');
          configScript.src = '/emailjs-config.js';
          configScript.async = true;
          document.head.appendChild(configScript);
        };
        document.head.appendChild(script);
      }
    };

    loadEmailJS();
  }, []);

  return null; // Este componente no renderiza nada
}
