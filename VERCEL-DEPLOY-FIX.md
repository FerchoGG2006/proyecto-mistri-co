# Fix para Deploy en Vercel

## Problema
Vercel no detecta el directorio `src/app` y muestra el error:
```
Couldn't find any `pages` or `app` directory
```

## Solución

Next.js 15 debería detectar automáticamente el directorio `src/`, pero en algunos casos Vercel necesita configuración adicional.

### Opción 1: Verificar en Dashboard de Vercel

1. Ve a tu proyecto en Vercel Dashboard
2. Settings → General
3. Asegúrate de que **Root Directory** esté configurado como `./` (raíz del proyecto)
4. **Framework Preset** debe ser **Next.js**
5. Guarda los cambios y re-deploya

### Opción 2: Variables de Entorno

Asegúrate de configurar las variables de entorno necesarias en Vercel:

1. Ve a Settings → Environment Variables
2. Agrega las siguientes variables (copia desde `.env.example`):

```env
# Mínimo necesario para que funcione el build
NEXTAUTH_URL=https://tu-dominio.vercel.app
NEXTAUTH_SECRET=genera-un-secret-con-openssl

# Si vas a usar las otras funciones:
DATABASE_URL=tu-conexion-postgresql
NEXT_PUBLIC_EMAILJS_SERVICE_ID=tu-service-id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=tu-template-id
NEXT_PUBLIC_EMAILJS_PUBLIC_KEY=tu-public-key
```

### Opción 3: Forzar Redetección

Si nada funciona:

1. En Vercel Dashboard, ve a tu proyecto
2. Settings → General → Framework Preset
3. Cambia temporalmente a "Other"
4. Guarda
5. Vuelve a cambiar a "Next.js"
6. Guarda y re-deploya

### Opción 4: Reinstalar desde Vercel

1. Desconecta el proyecto de Vercel
2. Elimina el proyecto en Vercel
3. Vuelve a importar desde GitHub
4. Vercel debería detectar correctamente la estructura

## Verificación Local

Para verificar que el build funciona correctamente antes de deployar:

```bash
# Instalar dependencias
npm install

# Build de producción
npm run build

# Si el build funciona localmente, debería funcionar en Vercel
```

## Archivos de Configuración

Los siguientes archivos aseguran que Next.js detecte el directorio `src/`:

- ✅ `next.config.js` - Configuración de Next.js
- ✅ `tsconfig.json` - Paths configurados con `@/*` → `./src/*`
- ✅ `jsconfig.json` - Configuración adicional para JS
- ✅ `.env.example` - Plantilla de variables de entorno

## Estructura del Proyecto

```
mistri-co/
├── src/
│   ├── app/          ← Next.js debe detectar esta carpeta
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── ...
│   ├── components/
│   └── lib/
├── public/
├── next.config.js
├── tsconfig.json
└── package.json
```

## Troubleshooting

Si el error persiste:

1. **Verifica que el commit incluya todos los archivos**:
   ```bash
   git status
   git log -1 --stat
   ```

2. **Verifica que GitHub tenga el código actualizado**:
   - Ve a tu repositorio en GitHub
   - Verifica que exista `src/app/layout.tsx` y `src/app/page.tsx`

3. **Fuerza un nuevo deploy en Vercel**:
   - Deployments → (último deploy) → ... → Redeploy

4. **Contacta soporte de Vercel**:
   Si nada funciona, puede ser un bug. Vercel tiene excelente soporte.

## Recursos

- [Next.js Project Structure](https://nextjs.org/docs/getting-started/project-structure)
- [Vercel Deploy Troubleshooting](https://vercel.com/docs/deployments/troubleshoot)
- [Next.js on Vercel](https://vercel.com/docs/frameworks/nextjs)

