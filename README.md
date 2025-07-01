# 📌 TrackTask

<div align="center">

![Imagen del proyecto](TrackTask.png)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Render](https://img.shields.io/badge/Render-00979D?style=for-the-badge&logo=render&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

**Una aplicación simple y rápida para crear, ver, editar y eliminar tareas personales, construida con el stack MERN (MongoDB, Express, React, Node) y optimizada con Tailwind CSS para una interfaz moderna.**

## 🧠 ¿Cuál es la idea?

TrackTask nace para resolver un problema común: muchas personas quieren organizar sus tareas diarias pero no encuentran una herramienta que sea simple, ligera y visualmente agradable.

Con TrackTask puedes:

- Agregar tareas con nombre y descripción.
- Consultarlas en una lista clara.
- Marcar o eliminar tareas cuando las completes.

## 🎯 Público objetivo

- Estudiantes que deben llevar un control de asignaciones o exámenes.
- Freelancers que realizan múltiples tareas en el día.
- Personas que desean una app simple sin depender de apps pesadas como Notion o Trello.

## 🤖 Uso de Inteligencia Artificial

Se integraron herramientas de IA durante todo el flujo de desarrollo:

| Herramienta                   | Uso                                                                                                                                                   |
| ----------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| **ChatGPT**                   | Generación de datos de prueba para la base de datos, redacción de la documentación y creación del README.                                             |
| **Cursor (con IA integrada)** | Autocompletado inteligente para acelerar el desarrollo, generación de código automatizada, y asistencia para detectar y corregir bugs en tiempo real. |

## 🚀 Instrucciones para ejecutar localmente

1. Clona el repositorio

```
git clone https://github.com/mariadev22/TrackTask.git
cd TrackTask
```

2. Configura el backend

```
cd server
pnpm install
```

Crea un archivo .env con tu cadena de conexión de MongoDB:

```
MONGODB_URI=mongodb+srv://<usuario>:<contraseña>@cluster.mongodb.net/Note
```

Inicia el servidor:

```
pnpm run dev
```

3. Configura el frontend

```
cd client
pnpm install
```

Crea un archivo .env.local con tu cadena de conexión de servidor:

```
VITE_SERVER_URL=http://localhost:3000
```

Inicia el cliente:

```
pnpm run dev
```

## 🧪 Funcionalidades principales (MVP)

- Crear nota (POST)
- Leer notas (GET)
- Actualizar nota (PUT)
- Eliminar nota (DELETE)
- Detección automática del tema del navegador (oscuro/claro)
- Interfaz 100% responsive (adaptable a móviles, tabletas y escritorio)

## 🔍 Limitaciones y mejoras futuras

### 🔒 Limitaciones actuales:

- No hay autenticación: cualquier persona con el enlace puede acceder y usar la aplicación.
- No hay sistema de prioridades ni organización por fechas.

## 🚀 Ideas para mejoras futuras:

- Implementar autenticación segura (JWT).
- Añadir prioridades, fechas límite y categorías.
- Filtros por estado (pendiente, completada, etc.).
- Recordatorios automáticos vía notificaciones o correo electrónico.
- Vista de calendario o planificación semanal.
