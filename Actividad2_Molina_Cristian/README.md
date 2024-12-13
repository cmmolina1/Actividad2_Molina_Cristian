# Aplicación Web

El presente proyecto implementa una aplicación web modular mediante el uso de **Web Components personalizados**. Cada componente utiliza **Shadow DOM**, **Templates** y **Slots** para encapsular estructura, funcionalidad y estilos.

## **Estructura del Proyecto**
La estructura de archivos sigue una organización modular:

```
├── components/
│   ├── header.js
│   ├── footer.js
│   ├── main.js
│   ├── menu.js
│   ├── social-profile.js
│   ├── custom-table.js
│   └── gallery.js
├── data/
│   ├── data.json
│   
├── index.html
└── styles/

```

## **Componentes**
A continuación, se describe el funcionamiento de cada componente:

### **1. Header**
**Archivo:** `header.js`

- **Función:** Proporciona el encabezado de la página.
- **Características:**
  - Usa Shadow DOM para encapsular el contenido.
  - Incluye un título dinámico que puede ser modificado según las necesidades del usuario.
  - Renderiza un título y, opcionalmente, un subtítulo.
  - Puede incluir enlaces de navegación principales.
  - Utiliza Shadow DOM para encapsular su estilo y evitar conflictos con otros estilos de la página.
- **Ejemplo de Uso:**
  ```html
  <custom-header></custom-header>
  ```

---

### **2. Footer**
**Archivo:** `footer.js`

- **Función:** Muestra el pie de página con información de copyright.
- **Características:**
  - Shadow DOM para estilos encapsulados.
  - Información estática que puede personalizarse dentro del componente.
  - Incluye información como derechos de autor, enlaces a políticas de privacidad, o redes sociales.
  - Puede utilizarse en conjunto con estilos globales o locales para adaptarse al diseño general de la aplicación.
- **Ejemplo de Uso:**
  ```html
  <custom-footer></custom-footer>
  ```

---

### **3. Main**
**Archivo:** `main.js`

- **Función:** Contenedor principal para las páginas de la aplicación.
- **Características:**
  - Uso de slots para incorporar contenido dinámico.
  - Encapsulación con Shadow DOM para estilos.
  - Muestra el contenido correspondiente a la sección seleccionada desde el menú.
  - Facilita la integración de otros componentes como tablas o galerías.
  - Su contenido puede actualizarse dinámicamente utilizando eventos o métodos específicos.
- **Ejemplo de Uso:**
  ```html
  <custom-main>
    <div slot="content">Contenido principal aquí</div>
  </custom-main>
  ```

---

### **4. Menu**
**Archivo:** `menu.js`

- **Función:** Menú de navegación funcional entre las páginas.
- **Características:**
  - Shadow DOM para encapsular los estilos.
  - Enlaces dinámicos que permiten la navegación entre componentes.
  - Carga una lista de elementos del menú de manera estática o desde un archivo JSON.
  - Escucha eventos para gestionar la interacción del usuario.
  - Soporta estilos personalizados mediante atributos.
- **Ejemplo de Uso:**
  ```html
  <custom-menu></custom-menu>
  ```

---

### **5. SocialProfile**
**Archivo:** `social-profile.js`

- **Función:** Muestra un perfil de usuario con datos estáticos (nombre, descripción, imagen, etc.).
- **Características:**
  - Estilizado con Shadow DOM.
  - Información personalizable dentro del componente.
  - Recibe datos desde un archivo JSON o un atributo HTML.
  - Genera dinámicamente una lista de enlaces o iconos.
- **Ejemplo de Uso:**
  ```html
  <social-profile></social-profile>
  ```

---

### **6. CustomTable**
**Archivo:** `custom-table.js`

- **Función:** Genera una tabla personalizada que carga datos desde un archivo JSON o API REST.
- **Características:**
  - Carga de datos dinámica desde `users.json` o `https://jsonplaceholder.typicode.com/users`.
  - Shadow DOM para encapsulación.
  - Carga datos desde un archivo JSON o una fuente de datos proporcionada dinámicamente.
  - Soporta estilos personalizados, ordenación y filtros básicos.
- **Ejemplo de Uso:**
  ```html
  <custom-table></custom-table>
  ```

---

### **7. Gallery**
**Archivo:** `gallery.js`

- **Función:** Muestra una galería de imágenes obtenidas de un archivo JSON o API REST.
- **Características:**
  - Carga imágenes desde `gallery.json` o `https://pokeapi.co/`.
  - Shadow DOM para encapsular estilos y funcionalidad.
  - Los datos se cargan desde un archivo JSON o mediante atributos HTML.
  - Permite opciones de diseño como carrusel o grid.
- **Ejemplo de Uso:**
  ```html
  <custom-gallery></custom-gallery>
  ```
**Archivos Adicionales:**

- data.json: Contiene datos de ejemplo para los componentes como el menú, la galería y la tabla.

- styles.css: Archivo de estilos globales para los componentes que no usan Shadow DOM.
---

## **Navegación**
El componente `<custom-menu>` maneja la navegación entre los diferentes componentes, actualizando el contenido del `<custom-main>` según la página seleccionada.

---

## **Estilos**
Cada componente incluye estilos CSS encapsulados mediante Shadow DOM para evitar conflictos globales. 

Estilos globales adicionales están definidos en `styles/main.css`.

---

## **Prueba y Verificación**
1. Abre el archivo `index.html` en un servidor local.
2. Navega entre las páginas utilizando el menú principal.
3. Verifica que:
   - Todos los componentes se muestren correctamente.
   - Los datos de la tabla y la galería se carguen desde las fuentes definidas.

---

## **Requisitos Previos**
- Navegador moderno compatible con Web Components (Chrome, Firefox, Edge, etc.).
- Servidor local (puedes usar Python, Live Server, o http-server).

---

