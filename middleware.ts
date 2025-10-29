import createMiddleware from 'next-intl/middleware';
import {locales, defaultLocale} from './src/i18n';

export default createMiddleware({
  locales,
  defaultLocale
});

export const config = {
  matcher: [
    // protege rutas estáticas y dinámicas para añadir /pt o /es
    // Excluir admin y otras rutas que no necesitan internacionalización
    '/((?!_next|admin|.*\\..*).*)'
  ]
};
