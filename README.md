# Igloobal Test Frontend

Este repositorio contiene el **frontend** de la aplicación de gestión de productos farmacéuticos, desarrollada con **React**, **TypeScript** y **CSS puro** para los estilos. La interfaz ofrece:

- **Tabla de productos** con posibilidad de eliminar cada fila mediante un ícono de papelera.
- **Modal** de confirmación para eliminación de productos.
- **Toast** de notificaciones para retroalimentación tras crear o eliminar.
- **Modal** para agregar un nuevo producto (formulario con campos de nombre, descripción y precio).
  

## Requisitos previos

1. **Node.js (versión 16.x o superior)**  
   Descargar e instalar desde la página oficial:  
   https://nodejs.org/en/download/  
   Verificar la instalación:
   ```bash
   node -v
   npm -v
   ```
npm se instala automáticamente junto a Node.js.

## Instalación del proyecto
1.  **Clonar este repositorio o descargar el contenido en formato ZIP:**

```bash
git clone https://github.com/SnedierFuentes/igloobal-test-frontend.git
cd igloobal-test-frontend
```

2.  **Instalar las dependencias:**

```bash
npm install
```

## Estructura principal (dentro de la carpeta src)

```bash
src
│   App.css
│   App.test.tsx
│   App.tsx
│   index.css
│   index.tsx
│   logo.svg
│   react-app-env.d.ts
│   reportWebVitals.ts
│   setupTests.ts
│
├───components
│       AddProductModal.tsx
│       ConfirmDeleteModal.tsx
│       ProductTable.tsx
│       title.tsx
│       ToastNotification.tsx
│
├───interface
│       types.ts
│
├───screen
│       ProductList.tsx
│
├───service
│       api.ts
│
├───store
│   │   index.ts
│   │
│   ├───slice
│   │       productSlice.ts
│   │
│   └───thunks
│           productThunks.ts
│
└───styles
        Modal.css
        Table.css
        Title.css
```

## Descripción breve
   **components:** Contiene componentes reutilizables (modales, tablas, toasts).
   
   **interface:** Almacena tipos (interfaces) de TypeScript.
   
   **screen:** Pantallas o vistas principales (en este caso, la vista de la lista de productos).
   
   **service:** Define la lógica de consumo de la API (archivo api.ts).
   
   **store:** Manejo de estado global con Redux Toolkit (slices y thunks para acciones asíncronas).
   
   **styles:** Archivos CSS puros para estilizar modales, tablas y elementos de la interfaz.


## Ejecución en modo desarrollo
Para levantar la aplicación en modo desarrollo:

```bash
npm start
```

La aplicación, por defecto, estará disponible en http://localhost:3000. A partir de ahí se podrá visualizar la tabla de productos, usar el botón de “Agregar producto” y confirmar o rechazar eliminaciones. Si el backend esta corriendo en el puerto 3000 configurar otro puerto para el fronted

## Compilación para producción
Para generar una build optimizada, se ejecuta:

```bash
npm run build
```
Este comando crea la carpeta build/ con los archivos minificados y listos para desplegar en un servidor estático.

## Notas finales
Asegurarse de tener el backend en ejecución (por defecto, http://localhost:3000/api) o ajustar la ruta en service/api.ts.
Se pueden personalizar los estilos en la carpeta styles.
Si se requiere un despliegue en producción, tomar la carpeta build tras ejecutar npm run build y subirla a un hosting o servirla desde un servidor web (Nginx, Apache, etc.).


