# 📌 TrackTask

<div align="center">

![Imagen del proyecto](TrackTask.png)

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=FFD62E)
![Tailwind CSS](https://img.shields.io/badge/TailwindCSS-06B6D4?style=for-the-badge&logo=tailwindcss&logoColor=white)
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=node.js&logoColor=white)
![Express](https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Railway](https://img.shields.io/badge/Railway-0B0D0E?style=for-the-badge&logo=railway&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)

</div>

---

**Una aplicación simple y rápida para crear, ver, editar y eliminar tareas personales, construida con el stack MERN (MongoDB, Express, React, Node) y optimizada con Tailwind CSS para una interfaz moderna.**

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

### 🔒 Limitaciones actuales:

- No hay autenticación: cualquier persona con el enlace puede acceder y usar la aplicación.
- No hay sistema de prioridades ni organización por fechas.
