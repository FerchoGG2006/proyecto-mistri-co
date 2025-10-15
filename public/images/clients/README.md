# Logos de Clientes

## Instrucciones para agregar logos de clientes

### 1. Preparación de las imágenes
- **Formato recomendado**: PNG con fondo transparente
- **Tamaño**: Máximo 200px de ancho x 100px de alto
- **Calidad**: Alta resolución para que se vean nítidos
- **Estilo**: Logos en color (se convertirán automáticamente a escala de grises)

### 2. Nombres de archivos
Reemplaza los nombres de ejemplo con los nombres reales de tus clientes:

```
empresa-a.png          → nombre-real-cliente-1.png
corporacion-b.png      → nombre-real-cliente-2.png
grupo-c.png           → nombre-real-cliente-3.png
organizacion-d.png    → nombre-real-cliente-4.png
compañia-e.png        → nombre-real-cliente-5.png
sociedad-f.png        → nombre-real-cliente-6.png
instituto-g.png       → nombre-real-cliente-7.png
fundacion-h.png       → nombre-real-cliente-8.png
```

### 3. Actualizar el código
Después de agregar las imágenes, actualiza el archivo `app/page.tsx` en la sección de `clients`:

```typescript
const clients = [
  { 
    name: "Nombre Real Cliente 1", 
    logo: "/images/clients/nombre-real-cliente-1.png",
    alt: "Logo de Nombre Real Cliente 1"
  },
  { 
    name: "Nombre Real Cliente 2", 
    logo: "/images/clients/nombre-real-cliente-2.png",
    alt: "Logo de Nombre Real Cliente 2"
  },
  // ... agregar más clientes
];
```

### 4. Características del efecto
- **Desplazamiento**: Los logos se mueven horizontalmente de derecha a izquierda
- **Loop infinito**: El efecto se repite continuamente
- **Velocidad**: 30 segundos por ciclo completo
- **Efecto hover**: Al pasar el mouse, el logo se vuelve a color
- **Responsive**: Se adapta a diferentes tamaños de pantalla

### 5. Agregar más clientes
Para agregar más clientes:
1. Agrega la imagen en esta carpeta
2. Actualiza el array `clients` en `app/page.tsx`
3. El efecto se ajustará automáticamente

### 6. Optimización
- Las imágenes se optimizan automáticamente con Next.js
- Se cargan de forma lazy para mejor rendimiento
- Se adaptan a diferentes densidades de píxeles

### Ejemplo de uso:
```typescript
const clients = [
  { 
    name: "Microsoft", 
    logo: "/images/clients/microsoft.png",
    alt: "Logo de Microsoft"
  },
  { 
    name: "Google", 
    logo: "/images/clients/google.png",
    alt: "Logo de Google"
  },
  { 
    name: "Amazon", 
    logo: "/images/clients/amazon.png",
    alt: "Logo de Amazon"
  },
];
```
