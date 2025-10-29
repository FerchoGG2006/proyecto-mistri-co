# 📤 Guía de Subida de Archivos a DonWeb

## 🎯 Fase Actual: Subir Archivos al Servidor

### 📋 Checklist Pre-Subida
- [x] Build generado exitosamente
- [x] Carpeta `out/` con todos los archivos
- [x] Archivo `.htaccess` configurado
- [x] Instrucciones de DonWeb creadas

---

## 🚀 Métodos de Subida

### **Método 1: Cliente FTP (Recomendado)**

#### Herramientas Recomendadas:
- **FileZilla** (Gratuito) - [filezilla-project.org](https://filezilla-project.org)
- **WinSCP** (Windows) - [winscp.net](https://winscp.net)
- **Cyberduck** (Mac) - [cyberduck.io](https://cyberduck.io)

#### Pasos:
1. **Descargar e instalar** FileZilla
2. **Obtener credenciales** del panel de DonWeb:
   - Host: `ftp.donweb.com` o IP del servidor
   - Usuario: [tu_usuario_donweb]
   - Contraseña: [tu_contraseña_donweb]
   - Puerto: 21 (FTP) o 22 (SFTP)

3. **Conectar** con las credenciales
4. **Navegar** a la carpeta `public_html/`
5. **Subir TODOS** los archivos de la carpeta `out/`

---

### **Método 2: Panel Web de DonWeb**

#### Pasos:
1. **Acceder** al panel de DonWeb
2. **Ir a** "File Manager" o "Administrador de Archivos"
3. **Navegar** a `public_html/`
4. **Subir archivos** uno por uno (más lento pero seguro)

---

## 📁 Estructura de Archivos a Subir

### **Archivos Principales:**
```
public_html/
├── .htaccess                    # ⚠️ IMPORTANTE: Configuración del servidor
├── index.html                   # Página principal
├── 404.html                     # Página de error
├── robots.txt                   # SEO
├── sitemap.xml                  # Mapa del sitio
├── favicon.ico                  # Icono del sitio
├── INSTRUCCIONES_DONWEB.md      # Guía de referencia
└── [otros archivos...]
```

### **Carpetas Principales:**
```
public_html/
├── images/                      # Todas las imágenes del sitio
├── _next/                       # Assets de Next.js (CSS, JS)
├── es/                          # Páginas en español
├── pt/                          # Páginas en portugués
├── admin/                       # Panel de administración
└── translations/                # Archivos de traducción
```

---

## ⚠️ Consideraciones Importantes

### **1. Orden de Subida (Recomendado):**
1. **Primero**: Archivos de configuración (`.htaccess`, `robots.txt`)
2. **Segundo**: Archivos principales (`index.html`, `404.html`)
3. **Tercero**: Carpetas de contenido (`images/`, `_next/`)
4. **Cuarto**: Páginas de idiomas (`es/`, `pt/`)
5. **Último**: Panel de admin (`admin/`)

### **2. Permisos de Archivos:**
- **Archivos**: 644 (lectura/escritura para propietario, lectura para otros)
- **Carpetas**: 755 (lectura/escritura/ejecución para propietario, lectura/ejecución para otros)

### **3. Verificaciones Durante la Subida:**
- ✅ **`.htaccess`** se subió correctamente
- ✅ **`index.html`** está en la raíz
- ✅ **Carpeta `images/`** completa
- ✅ **Carpeta `_next/`** completa
- ✅ **Carpetas `es/` y `pt/`** completas

---

## 🔧 Configuración Post-Subida

### **1. Verificar Estructura:**
```
public_html/
├── .htaccess ✅
├── index.html ✅
├── 404.html ✅
├── robots.txt ✅
├── sitemap.xml ✅
├── images/ ✅
├── _next/ ✅
├── es/ ✅
├── pt/ ✅
├── admin/ ✅
└── translations/ ✅
```

### **2. Activar SSL:**
1. Ir a **"SSL"** en el panel de DonWeb
2. Activar **"Let's Encrypt"** (gratuito)
3. Esperar activación (5-10 minutos)

### **3. Configurar DNS:**
1. Ir a **"Dominios"** → **"DNS"**
2. Configurar:
   - **A Record**: `@` → IP del servidor
   - **CNAME**: `www` → `tu-dominio.com`

---

## 🧪 Verificación Inmediata

### **URLs a Probar (después de subir):**
- `http://tu-dominio.com` → Debe redirigir a `/es/`
- `http://tu-dominio.com/es/` → Página en español
- `http://tu-dominio.com/pt/` → Página en portugués
- `http://tu-dominio.com/admin` → Panel de admin

### **Verificaciones Técnicas:**
- [ ] **Página carga** sin errores
- [ ] **Imágenes se ven** correctamente
- [ ] **CSS se aplica** (estilos funcionan)
- [ ] **Navegación funciona** entre páginas
- [ ] **Formularios cargan** (contacto, academia)

---

## 🚨 Solución de Problemas

### **Si la página no carga:**
1. Verificar que `index.html` está en `public_html/`
2. Verificar que `.htaccess` se subió
3. Verificar permisos de archivos

### **Si las imágenes no cargan:**
1. Verificar que `images/` se subió completa
2. Verificar permisos de la carpeta `images/`

### **Si el CSS no se aplica:**
1. Verificar que `_next/` se subió completa
2. Verificar que los archivos CSS están en `_next/static/css/`

### **Si hay errores 404:**
1. Verificar configuración de `.htaccess`
2. Verificar que todas las páginas se subieron

---

## 📞 Soporte Durante la Subida

### **DonWeb Soporte:**
- **Email**: [soporte@donweb.com](mailto:soporte@donweb.com)
- **Chat en Vivo**: Panel de DonWeb
- **Teléfono**: Disponible en el panel

### **Herramientas de Diagnóstico:**
- **FTP Log**: Revisar logs de subida en FileZilla
- **Panel de DonWeb**: Ver logs de error del servidor
- **Browser DevTools**: Ver errores de carga

---

## ✅ Checklist de Subida

### **Pre-Subida:**
- [x] Build generado sin errores
- [x] Carpeta `out/` lista
- [x] Credenciales FTP obtenidas
- [x] Cliente FTP instalado

### **Durante la Subida:**
- [ ] Conectar a FTP exitosamente
- [ ] Navegar a `public_html/`
- [ ] Subir archivo `.htaccess`
- [ ] Subir `index.html`
- [ ] Subir carpeta `images/`
- [ ] Subir carpeta `_next/`
- [ ] Subir carpetas `es/` y `pt/`
- [ ] Subir carpeta `admin/`
- [ ] Subir archivos restantes

### **Post-Subida:**
- [ ] Verificar estructura de archivos
- [ ] Probar URLs principales
- [ ] Activar SSL
- [ ] Configurar DNS
- [ ] Verificar funcionamiento completo

---

**🚀 ¡Listo para subir los archivos!**

Una vez completada la subida, tu sitio Mistri&Co estará funcionando en DonWeb con todas las funcionalidades: internacionalización, panel de administración, formularios, y optimizaciones de rendimiento.
