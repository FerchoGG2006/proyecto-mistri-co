# 🚀 Guía de Deploy en DonWeb - Mistri&Co

## 📋 **PASO 1: Preparar el Sitio para Deploy**

### 1.1 Verificar Build
```bash
npm run build
```
✅ El build debe completarse sin errores y generar la carpeta `out/`

### 1.2 Contenido a Subir
Subir **TODO** el contenido de la carpeta `out/` a `public_html/` en DonWeb.

## 📁 **PASO 2: Subir Archivos al Hosting DonWeb**

### 2.1 Acceso al Panel de Control
1. Ingresa a tu panel de DonWeb
2. Ve a **"Archivos"** → **"Administrador de Archivos"**
3. Navega a la carpeta `public_html/`

### 2.2 Subir Archivos
1. **Eliminar contenido existente** en `public_html/` (si hay)
2. **Subir todos los archivos** de la carpeta `out/` a `public_html/`
3. **Verificar que se subieron:**
   - `index.html`
   - `_next/` (carpeta con assets)
   - `images/` (carpeta con imágenes)
   - `.htaccess`
   - `emailjs-config.js`

### 2.3 Estructura Final en public_html/
```
public_html/
├── index.html
├── 404.html
├── .htaccess
├── emailjs-config.js
├── _next/
│   ├── static/
│   └── ...
├── images/
│   ├── servicios/
│   ├── clients/
│   └── ...
├── blog.html
├── contacto.html
├── servicios.html
└── ... (todas las páginas)
```

## 🌐 **PASO 3: Configurar Dominio mistriconsultora.com**

### 3.1 Configuración DNS
En el panel de DonWeb:
1. Ve a **"Dominios"** → **"Gestionar DNS"**
2. Configurar registros DNS:
   ```
   Tipo: A
   Nombre: @
   Valor: [IP del servidor DonWeb]
   TTL: 3600
   
   Tipo: A
   Nombre: www
   Valor: [IP del servidor DonWeb]
   TTL: 3600
   ```

### 3.2 Verificar Configuración
- Esperar 24-48 horas para propagación DNS
- Verificar con: `nslookup mistriconsultora.com`

## 📧 **PASO 4: Configurar Email Corporativo**

### 4.1 Crear Casilla de Email
En DonWeb:
1. Ve a **"Email"** → **"Cuentas de Email"**
2. Crear cuenta: `contacto@mistriconsultora.com`
3. Configurar contraseña segura
4. Anotar credenciales SMTP:
   - **Servidor SMTP:** `mail.mistriconsultora.com`
   - **Puerto:** `587` (TLS) o `465` (SSL)
   - **Usuario:** `contacto@mistriconsultora.com`
   - **Contraseña:** [la que configuraste]

### 4.2 Configurar EmailJS (Recomendado)

#### 4.2.1 Crear Cuenta EmailJS
1. Ir a [EmailJS.com](https://www.emailjs.com/)
2. Crear cuenta gratuita
3. Verificar email

#### 4.2.2 Configurar Servicio de Email
1. En EmailJS, ir a **"Email Services"**
2. Agregar servicio **"Gmail"** o **"Outlook"**
3. Conectar con `contacto@mistriconsultora.com`
4. Anotar **Service ID**

#### 4.2.3 Crear Template de Email
1. Ir a **"Email Templates"**
2. Crear template llamado `template_contacto`
3. Configurar template:
   ```html
   <h2>Nuevo Mensaje de Contacto - Mistri&Co</h2>
   
   <p><strong>Nombre:</strong> {{from_name}}</p>
   <p><strong>Email:</strong> {{from_email}}</p>
   <p><strong>Teléfono:</strong> {{phone}}</p>
   <p><strong>Empresa:</strong> {{company}}</p>
   <p><strong>Servicio:</strong> {{service}}</p>
   <p><strong>Asunto:</strong> {{subject}}</p>
   
   <h3>Mensaje:</h3>
   <p>{{message}}</p>
   
   <hr>
   <p><em>Enviado desde el formulario de contacto de mistriconsultora.com</em></p>
   ```
4. Configurar:
   - **To Email:** `contacto@mistriconsultora.com`
   - **From Name:** `{{from_name}}`
   - **Reply To:** `{{from_email}}`
   - **Subject:** `Nuevo contacto: {{subject}}`

#### 4.2.4 Obtener Claves API
1. Ir a **"Account"** → **"General"**
2. Anotar **Public Key**

#### 4.2.5 Actualizar Configuración
Editar `public/emailjs-config.js`:
```javascript
const EMAILJS_SERVICE_ID = 'service_xxxxxxx'; // Tu Service ID
const EMAILJS_TEMPLATE_ID = 'template_contacto'; // Tu Template ID
const EMAILJS_PUBLIC_KEY = 'xxxxxxxxxxxxxxx'; // Tu Public Key
```

## 🔒 **PASO 5: Activar SSL/HTTPS**

### 5.1 SSL Gratuito (Let's Encrypt)
En DonWeb:
1. Ve a **"Dominios"** → **"Certificados SSL"**
2. Seleccionar `mistriconsultora.com`
3. Activar **"Let's Encrypt SSL"**
4. Esperar activación (5-10 minutos)

### 5.2 Verificar HTTPS
- Visitar `https://mistriconsultora.com`
- Verificar que aparezca el candado verde
- Probar redirección automática de HTTP a HTTPS

## 🧪 **PASO 6: Pruebas y Verificación**

### 6.1 Pruebas del Sitio
- [ ] Página principal carga correctamente
- [ ] Todas las páginas navegan sin errores
- [ ] Imágenes se cargan correctamente
- [ ] Formulario de contacto funciona
- [ ] SSL/HTTPS activo
- [ ] Redirección www → no-www funciona

### 6.2 Pruebas del Formulario
1. Ir a `https://mistriconsultora.com/contacto`
2. Completar formulario de prueba
3. Enviar mensaje
4. Verificar que llega a `contacto@mistriconsultora.com`
5. Responder desde la casilla corporativa

### 6.3 Pruebas de Performance
- Usar [PageSpeed Insights](https://pagespeed.web.dev/)
- Verificar Core Web Vitals
- Optimizar si es necesario

## 📊 **PASO 7: Configuraciones Adicionales**

### 7.1 Google Analytics (Opcional)
1. Crear cuenta en [Google Analytics](https://analytics.google.com/)
2. Obtener código de seguimiento
3. Agregar a `app/layout.tsx`

### 7.2 Google Search Console
1. Verificar propiedad del dominio
2. Enviar sitemap: `https://mistriconsultora.com/sitemap.xml`
3. Configurar indexación

### 7.3 Backup Automático
Configurar backup automático en DonWeb:
1. Ir a **"Backups"**
2. Activar backup automático
3. Configurar frecuencia (diario/semanal)

## 🚨 **Solución de Problemas Comunes**

### Problema: Página no carga
**Solución:**
- Verificar que archivos estén en `public_html/`
- Comprobar permisos de archivos (644)
- Verificar configuración DNS

### Problema: Formulario no envía emails
**Solución:**
- Verificar configuración EmailJS
- Comprobar que `emailjs-config.js` esté en `public_html/`
- Revisar consola del navegador para errores

### Problema: SSL no funciona
**Solución:**
- Esperar propagación (hasta 24 horas)
- Verificar configuración DNS
- Contactar soporte DonWeb si persiste

### Problema: Imágenes no cargan
**Solución:**
- Verificar que carpeta `images/` esté en `public_html/`
- Comprobar rutas en el código
- Verificar permisos de archivos

## 📞 **Contacto de Soporte**

- **DonWeb Soporte:** [soporte.donweb.com](https://soporte.donweb.com)
- **EmailJS Soporte:** [help.emailjs.com](https://help.emailjs.com)

## ✅ **Checklist Final**

- [ ] Sitio subido a `public_html/`
- [ ] Dominio configurado y funcionando
- [ ] SSL/HTTPS activo
- [ ] Email corporativo configurado
- [ ] Formulario de contacto funcionando
- [ ] Todas las páginas cargan correctamente
- [ ] Performance optimizada
- [ ] Backup configurado

---

**¡Felicidades! Tu sitio estático de Mistri&Co está listo y funcionando en mistriconsultora.com** 🎉
