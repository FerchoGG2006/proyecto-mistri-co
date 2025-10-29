# 🚀 Plan de Despliegue a DonWeb - Mistri&Co

## 📋 Resumen del Proyecto
- **Tipo**: Sitio web Next.js con internacionalización (ES/PT)
- **Características**: Panel de administración, blog, servicios, academia
- **Build**: Estático (SSG) para hosting tradicional
- **Dominio**: Configurar según disponibilidad

---

## 🎯 Fase 1: Preparación del Build

### 1.1 Verificar Configuración de Build
```bash
# Verificar que el build está configurado para export estático
# En next.config.js debe estar:
output: 'export'
trailingSlash: true
images: { unoptimized: true }
```

### 1.2 Generar Build de Producción
```bash
# Limpiar instalaciones previas
npm run clean

# Instalar dependencias
npm install

# Generar build estático
npm run build

# Verificar que se generó la carpeta 'out'
ls -la out/
```

### 1.3 Verificar Archivos Generados
- ✅ Carpeta `out/` con todos los archivos estáticos
- ✅ Archivos HTML para todas las rutas
- ✅ Assets (CSS, JS, imágenes) optimizados
- ✅ Sitemap.xml y robots.txt

---

## 🎯 Fase 2: Configuración en DonWeb

### 2.1 Acceso al Panel de DonWeb
1. **Login**: Acceder a [donweb.com](https://donweb.com)
2. **Panel**: Ir a "Hosting" → "Administrar"
3. **FTP**: Obtener credenciales de FTP/SFTP

### 2.2 Configuración del Servidor
- **Tipo de Hosting**: Hosting compartido o VPS
- **PHP**: No necesario (sitio estático)
- **Node.js**: No necesario (build estático)
- **SSL**: Activar certificado SSL gratuito

---

## 🎯 Fase 3: Subida de Archivos

### 3.1 Método 1: FTP/SFTP (Recomendado)
```bash
# Usar cliente FTP como FileZilla, WinSCP, o comando scp
# Credenciales típicas:
# Host: ftp.donweb.com o IP del servidor
# Usuario: [usuario_proporcionado]
# Contraseña: [contraseña_proporcionada]
# Puerto: 21 (FTP) o 22 (SFTP)
```

### 3.2 Método 2: Panel de DonWeb
1. **File Manager**: Acceder al administrador de archivos
2. **Directorio**: Navegar a `public_html/` o `www/`
3. **Upload**: Subir archivos desde la carpeta `out/`

### 3.3 Estructura de Archivos a Subir
```
public_html/
├── index.html
├── 404.html
├── robots.txt
├── sitemap.xml
├── _next/
│   ├── static/
│   └── [hash]/
├── images/
├── [locale]/
│   ├── es/
│   └── pt/
└── admin/
```

---

## 🎯 Fase 4: Configuración del Dominio

### 4.1 Configuración DNS
- **A Record**: Apuntar dominio a IP del servidor DonWeb
- **CNAME**: Configurar www subdominio
- **TTL**: 300 segundos (5 minutos)

### 4.2 Configuración de Redirecciones
```apache
# .htaccess para manejar rutas SPA
RewriteEngine On
RewriteBase /

# Redirigir www a no-www (opcional)
RewriteCond %{HTTP_HOST} ^www\.(.*)$ [NC]
RewriteRule ^(.*)$ https://%1/$1 [R=301,L]

# Manejar rutas de Next.js
RewriteCond %{REQUEST_FILENAME} !-f
RewriteCond %{REQUEST_FILENAME} !-d
RewriteRule ^(.*)$ /index.html [L]
```

---

## 🎯 Fase 5: Optimizaciones Post-Despliegue

### 5.1 Configuración de Caché
```apache
# .htaccess para optimizar rendimiento
<IfModule mod_expires.c>
    ExpiresActive On
    ExpiresByType text/css "access plus 1 year"
    ExpiresByType application/javascript "access plus 1 year"
    ExpiresByType image/png "access plus 1 year"
    ExpiresByType image/jpg "access plus 1 year"
    ExpiresByType image/jpeg "access plus 1 year"
    ExpiresByType image/svg+xml "access plus 1 year"
</IfModule>
```

### 5.2 Compresión GZIP
```apache
# Habilitar compresión
<IfModule mod_deflate.c>
    AddOutputFilterByType DEFLATE text/plain
    AddOutputFilterByType DEFLATE text/html
    AddOutputFilterByType DEFLATE text/xml
    AddOutputFilterByType DEFLATE text/css
    AddOutputFilterByType DEFLATE application/xml
    AddOutputFilterByType DEFLATE application/xhtml+xml
    AddOutputFilterByType DEFLATE application/rss+xml
    AddOutputFilterByType DEFLATE application/javascript
    AddOutputFilterByType DEFLATE application/x-javascript
</IfModule>
```

---

## 🎯 Fase 6: Verificación y Testing

### 6.1 Checklist de Verificación
- [ ] **Homepage**: Carga correctamente en `/`
- [ ] **Internacionalización**: Funciona `/es/` y `/pt/`
- [ ] **Rutas**: Todas las páginas cargan sin errores 404
- [ ] **Imágenes**: Todas las imágenes se cargan correctamente
- [ ] **CSS/JS**: Estilos y funcionalidad JavaScript funcionan
- [ ] **Formularios**: Contacto y academia funcionan
- [ ] **Admin**: Panel de administración accesible
- [ ] **SSL**: Certificado SSL activo y funcionando
- [ ] **Mobile**: Responsive design en dispositivos móviles

### 6.2 Herramientas de Testing
- **Google PageSpeed Insights**: Verificar rendimiento
- **GTmetrix**: Análisis de velocidad
- **Mobile-Friendly Test**: Verificar mobile
- **SSL Labs**: Verificar certificado SSL

---

## 🎯 Fase 7: Configuración Final

### 7.1 SEO y Analytics
- **Google Search Console**: Verificar propiedad del sitio
- **Google Analytics**: Configurar tracking
- **Sitemap**: Enviar a Google Search Console
- **Robots.txt**: Verificar que esté accesible

### 7.2 Monitoreo
- **Uptime**: Configurar monitoreo de disponibilidad
- **Backups**: Configurar backups automáticos
- **Logs**: Revisar logs de errores del servidor

---

## 📋 Checklist Final

### Pre-Despliegue
- [ ] Build generado sin errores
- [ ] Todas las rutas funcionan localmente
- [ ] Imágenes optimizadas
- [ ] Configuración de i18n correcta
- [ ] Panel de admin funcional

### Durante el Despliegue
- [ ] Archivos subidos correctamente
- [ ] Estructura de carpetas correcta
- [ ] .htaccess configurado
- [ ] SSL activo

### Post-Despliegue
- [ ] Sitio accesible desde dominio
- [ ] Todas las páginas cargan
- [ ] Formularios funcionan
- [ ] Admin panel accesible
- [ ] SEO configurado
- [ ] Analytics funcionando

---

## 🚨 Consideraciones Importantes

### Limitaciones de DonWeb
- **Node.js**: No disponible en hosting compartido
- **Build Process**: Debe hacerse localmente
- **Server-Side**: Solo archivos estáticos
- **Base de Datos**: No necesaria para este proyecto

### Alternativas si DonWeb no Funciona
1. **Vercel**: Despliegue automático desde GitHub
2. **Netlify**: Similar a Vercel
3. **GitHub Pages**: Gratuito para sitios estáticos
4. **Hostinger**: Alternativa a DonWeb

---

## 📞 Contacto y Soporte

- **DonWeb Soporte**: [soporte@donweb.com](mailto:soporte@donweb.com)
- **Documentación**: [docs.donweb.com](https://docs.donweb.com)
- **Chat en Vivo**: Disponible en el panel de DonWeb

---

**🎉 ¡Listo para el despliegue!** 

Este plan te guiará paso a paso para subir tu sitio Mistri&Co a DonWeb de manera exitosa.