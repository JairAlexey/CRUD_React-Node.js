# CRUD de Productos con Autenticación - React y Node.js

Este es un proyecto de ejemplo de una aplicación **CRUD** de productos con autenticación de usuarios utilizando el stack **MERN** (MongoDB, Express, React, Node.js). Permite a los usuarios registrarse, iniciar sesión, gestionar productos (crear, ver, editar y eliminar), y cuenta con protección de rutas para restringir el acceso a ciertas páginas según el estado de autenticación.

## Funcionalidades

- **Registro e inicio de sesión de usuarios**: Los usuarios pueden crear una cuenta e iniciar sesión para acceder a sus productos.
- **Autenticación mediante JWT (JSON Web Tokens)**: Los tokens se almacenan en cookies seguras.
- **Gestión de productos**: Los usuarios autenticados pueden crear, editar y eliminar productos asociados a su cuenta.
- **Protección de rutas**: Solo los usuarios autenticados pueden acceder a las páginas de productos y perfil.
- **Interfaz de usuario con React**: Se utiliza React para la creación de componentes y gestión de rutas en el frontend.
- **Backend con Express y MongoDB**: El servidor se comunica con la base de datos MongoDB para almacenar y gestionar los datos de usuarios y productos.

## Tecnologías utilizadas

- **Frontend**:
  - React
  - React Router
  - Context API para la gestión de estado
  - Axios para realizar solicitudes HTTP
  - CSS para el estilo de la aplicación

- **Backend**:
  - Node.js
  - Express
  - MongoDB con Mongoose
  - JWT para autenticación
  - Bcrypt.js para encriptación de contraseñas
  - Morgan para logging de solicitudes HTTP
  - Cookie-parser para gestionar las cookies de autenticación

## Estructura del Proyecto

```bash
CRUD_React-Node.js/
├── client/               # Frontend con React
│   ├── src/
│   │   ├── App.jsx       # Definición de rutas y estructura principal
│   │   ├── pages/        # Páginas como Login, Signup, Home, Products
│   │   ├── context/      # Contextos de Autenticación y Productos
│   │   └── components/   # Componentes reutilizables
├── src/                  # Backend con Node.js y Express
│   ├── controllers/      # Controladores de productos y autenticación
│   ├── models/           # Modelos de usuario y producto (Mongoose)
│   ├── routes/           # Rutas para la API REST
│   ├── config.js         # Configuración del token JWT
│   ├── db.js             # Conexión a la base de datos MongoDB
│   └── app.js            # Configuración y middlewares de Express
└── README.md

