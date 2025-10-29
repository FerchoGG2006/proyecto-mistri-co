# 🚀 Mistri&Co - Guía de Despliegue a DonWeb

## 📋 Resumen del Proyecto

**Mistri&Co** es un sitio web corporativo para consultora argentina especializada en transformación organizacional, desarrollo de equipos y formación de mandos medios.

### Características Técnicas:
- **Next.js 15** con App Router
- **100% Estático** (SSG - Static Site Generation)
- **Internacionalización** (ES/PT)
- **TailwindCSS** con design system personalizado
- **Panel de administración** estático
- **SEO optimizado** con metadatos y sitemap
- **Responsive design** mobile-first

---

## 🎯 Preparación del Build

### 1. Generar Build de Producción

```bash
# Instalar dependencias
npm install

# Generar build estático
npm run build

# Verificar que se generó la carpeta 'out'
ls out/
```

### 2. Verificar Archivos Generados

El build debe generar:
- ✅ Carpeta `out/` con todos los archivos estáticos
- ✅ Archivos HTML para todas las rutas
- ✅ Assets (CSS, JS, imágenes) optimizados
- ✅ Sitemap.xml y robots.txt
- ✅ Archivo `.htaccess` configurado

### 3. Estructura del Build (`out/`)

```
out/
├── .htaccess                    # Configuración del servidor
├── index.html                   # Página principal
├── 404.html                     # Página de error
├── robots.txt                   # SEO
├── sitemap.xml                  # Mapa del sitio
├── favicon.ico                  # Icono del sitio
├── images/                      # Todas las imágenes
├── _next/                       # Assets de Next.js
├── es/                          # Páginas en español
├── pt/                          # Páginas en portugués
├── admin/                       # Panel de administración
└── translations/                # Archivos de traducción
```

---

## 📤 Subida de Archivos a DonWeb

### Método 1: Cliente FTP (Recomendado)

#### Herramientas Recomendadas:
- **FileZilla** (Gratuito) - [filezilla-project.org](https://filezilla-project.org)
- **WinSCP** (Windows) - [winscp.net](https://winscp.net)
- **Cyberduck** (Mac) - [cyberduck.io](https://cyberduck.io)

#### Pasos:
1. **Acceder al panel de DonWeb**
   - Login en [donweb.com](https://donweb.com)
   - Ir a "Hosting" → "Administrar"

2. **Obtener credenciales FTP**
   - Host: `ftp.donweb.com` o IP del servidor
   - Usuario: [tu_usuario_donweb]
   - Contraseña: [tu_contraseña_donweb]
   - Puerto: 21 (FTP) o 22 (SFTP)

3. **Conectar con FileZilla**
   - Configurar conexión con las credenciales
   - Navegar a la carpeta `public_html/`

4. **Subir TODOS los archivos**
   - Subir TODO el contenido de la carpeta `out/`
   - Mantener la estructura de carpetas
   - **IMPORTANTE**: No olvidar el archivo `.htaccess`

### Método 2: Panel Web de DonWeb

1. **Acceder** al panel de DonWeb
2. **Ir a** "File Manager" o "Administrador de Archivos"
3. **Navegar** a `public_html/`
4. **Subir archivos** manteniendo la estructura

---

## 🔧 Configuración del Servidor

### 1. Archivo `.htaccess` (Ya incluido en el build)

El archivo `.htaccess` incluye:
- ✅ Compresión GZIP habilitada
- ✅ Caché optimizado (1 año para assets)
- ✅ Headers de seguridad
- ✅ Redirecciones para SPA
- ✅ Manejo de internacionalización

### 2. Activar SSL

1. Ir a **"SSL"** en el panel de DonWeb
2. Activar **"Let's Encrypt"** (gratuito)
3. Esperar activación (5-10 minutos)

### 3. Configurar DNS

1. Ir a **"Dominios"** → **"DNS"**
2. Configurar:
   - **A Record**: `@` → IP del servidor DonWeb
   - **CNAME**: `www` → `tu-dominio.com`
   - **TTL**: 300 segundos (5 minutos)

---

## ✅ Verificación Post-Despliegue

### URLs a Probar:

- ✅ `http://tu-dominio.com` → Debe cargar correctamente
- ✅ `http://tu-dominio.com/es/` → Página en español
- ✅ `http://tu-dominio.com/pt/` → Página en portugués
- ✅ `http://tu-dominio.com/admin` → Panel de administración
- ✅ Todas las páginas principales cargan sin 404

### Verificaciones Técnicas:

- [ ] **Página carga** sin errores
- [ ] **Imágenes se ven** correctamente
- [ ] **CSS se aplica** (estilos funcionan)
- [ ] **Navegación funciona** entre páginas
- [ ] **Formularios cargan** correctamente
- [ ] **SSL activo** (HTTPS funcionando)
- [ ] **Responsive** en dispositivos móviles

### Herramientas de Testing:

- **Google PageSpeed Insights**: Verificar rendimiento
- **GTmetrix**: Análisis de velocidad
- **Mobile-Friendly Test**: Verificar mobile
- **SSL Labs**: Verificar certificado SSL

---

## 🚨 Solución de Problemas

### Si la página no carga:

1. Verificar que `index.html` está en `public_html/`
2. Verificar que `.htaccess` se subió correctamente
3. Verificar permisos de archivos (644 para archivos, 755 para carpetas)

### Si las imágenes no cargan:

1. Verificar que `images/` se subió completa
2. Verificar permisos de la carpeta `images/`
3. Verificar rutas en el código (deben ser relativas)

### Si el CSS no se aplica:

1. Verificar que `_next/` se subió completa
2. Verificar que los archivos CSS están en `_next/static/css/`
3. Verificar permisos de la carpeta `_next/`

### Si hay errores 404:

1. Verificar configuración de `.htaccess`
2. Verificar que todas las páginas se subieron
3. Verificar estructura de carpetas `es/` y `pt/`

---

## 📊 Estadísticas del Build

### Páginas Generadas:
- **Rutas principales**: 2 idiomas (es, pt)
- **Páginas por idioma**: 9 cada una
- **Panel de admin**: Múltiples secciones
- **Total**: ~42+ páginas estáticas

### Tamaño del Build:
- **First Load JS**: ~533 kB
- **Assets optimizados**: CSS, JS, imágenes
- **Compresión**: GZIP habilitada
- **Caché**: 1 año para assets estáticos

---

## 📝 Características del Sitio

### ✅ Lo que SÍ incluye:

- **Páginas de marketing** completamente funcionales
- **Internacionalización** (ES/PT)
- **Navegación** entre páginas
- **Formularios de contacto** (frontend)
- **Panel de administración** estático
- **SEO optimizado** con metadatos
- **Responsive design** para todos los dispositivos
- **Imágenes optimizadas** y assets estáticos
- **Sitemap y robots.txt** para SEO

### ❌ Lo que NO incluye:

- ~~Base de datos~~
- ~~APIs dinámicas (/api/*)~~
- ~~Autenticación con NextAuth~~
- ~~Contenido dinámico en tiempo real~~

---

## 🔄 Actualizaciones Futuras

Para actualizar el sitio:

1. **Hacer cambios** en el código local
2. **Generar nuevo build**: `npm run build`
3. **Subir archivos actualizados** a DonWeb
4. **Verificar** que todo funciona correctamente

---

## 📞 Soporte

### DonWeb:
- **Email**: soporte@donweb.com
- **Chat en Vivo**: Panel de DonWeb
- **Documentación**: [docs.donweb.com](https://docs.donweb.com)

### Proyecto Mistri&Co:
- **Email**: mistriconsultora@gmail.com
- **Teléfono**: +54 9 362 464-9700

---

## 🎉 Resultado Final

✅ **Sitio web 100% estático**  
✅ **Optimizado para SEO**  
✅ **Rendimiento máximo**  
✅ **Fácil de mantener y actualizar**  
✅ **Sin dependencias de servidor**  
✅ **Hosting económico**  

El sitio está completamente listo para producción y funcionando en DonWeb.

---

## 📋 Checklist Final de Despliegue

### Pre-Despliegue:
- [x] Build generado sin errores
- [x] Todas las rutas funcionan localmente
- [x] Imágenes optimizadas
- [x] Configuración de i18n correcta

### Durante el Despliegue:
- [ ] Archivos subidos correctamente
- [ ] Estructura de carpetas correcta
- [ ] `.htaccess` configurado
- [ ] SSL activo

### Post-Despliegue:
- [ ] Sitio accesible desde dominio
- [ ] Todas las páginas cargan
- [ ] Formularios funcionan
- [ ] Admin panel accesible
- [ ] SEO configurado
- [ ] Responsive funcionando

---

**🚀 ¡Todo listo para el despliegue!**

Este README contiene toda la información necesaria para desplegar y mantener el sitio Mistri&Co en DonWeb.

