# ReproGames (RproGms) 🎮

**ReproGames (RproGms)** es una aplicación de comercio electrónico diseñada para la venta de videojuegos retro de Super Nintendo que ya no se fabrican y que, debido a la especulación y la alta demanda, se han vuelto muy costosos. Este proyecto ofrece una plataforma donde los usuarios pueden adquirir **reproducciones** de estos juegos a precios más accesibles.

## Descripción del Proyecto

Este proyecto fue desarrollado como parte del Bootcamp de Fullstack para crear una plataforma de e-commerce que permita a los usuarios:

- Visualizar un catálogo de juegos de Super Nintendo.
- Comprar juegos con pasarelas de pago como PayPal.
- Autenticarse mediante JWT para acceder a áreas privadas.
- Almacenar y gestionar los datos de usuarios y productos en una base de datos MongoDB.

## Características del Proyecto

- **Catálogo de videojuegos retro**: Basado en los juegos más caros según [pricecharting.com](https://www.pricecharting.com).
- **Autenticación y Autorización**: Los usuarios pueden registrarse, iniciar sesión y acceder a su perfil.
- **Carrito de compras**: Los usuarios pueden agregar videojuegos al carrito y proceder al pago.
- **Pasarela de pago segura**: Integración con PayPal para pagos seguros y sencillos.
- **Backend en Node.js con Express**: La lógica del servidor maneja todas las solicitudes API y la autenticación.
- **Base de datos en MongoDB**: Almacena los datos de los usuarios y del catálogo de productos.

## Tecnologías Utilizadas

### Frontend:
- **React.js** (con Vite)
- **React Router** para la gestión de rutas.
- **Context API** para la gestión del estado global.
- **Material UI** para los componentes de la interfaz de usuario.
- **CSS Bootstrap** para el diseño responsivo.
- **PayPal SDK** para la integración de la pasarela de pago.

### Backend:
- **Node.js** con **Express.js**
- **MongoDB** como base de datos (con MongoDB Atlas).
- **JWT** (JSON Web Tokens) para la autenticación y autorización de usuarios.
  
### Despliegue:
- **Netlify** para el frontend.
- **Railway** para el backend.
- **MongoDB Atlas** para la base de datos en la nube.

## Instalación y Configuración

### Prerrequisitos
- Node.js (v16+)
- MongoDB Atlas (o local)
- Una cuenta de PayPal para el sandbox de pagos

### Clonar el Repositorio

```bash
git clone https://github.com/Kok3oficial/aplicacion-backend-autenticacion.git
cd aplicacion-backend-autenticacion
Instalación del Backend
Instala las dependencias del servidor:

bash
Copiar código
cd backend
npm install
Crea un archivo .env con las siguientes variables:

env
Copiar código
PORT=5000
MONGO_URI=tu_mongo_uri_aqui
JWT_SECRET=tu_secreto_jwt_aqui
PAYPAL_CLIENT_ID=tu_paypal_client_id_aqui
Ejecuta el servidor:

bash
Copiar código
npm start
Instalación del Frontend
Instala las dependencias del cliente:

bash
Copiar código
cd frontend
npm install
Ejecuta la aplicación de React:

bash
Copiar código
npm run dev
Uso de la Aplicación
Regístrate o inicia sesión en la plataforma.
Explora el catálogo de videojuegos de Super Nintendo.
Agrega juegos al carrito de compras.
Procede al pago utilizando PayPal.
Revisa tu perfil para ver el historial de compras.
Dificultades del Proyecto
Durante el desarrollo del proyecto, se presentaron dificultades para gestionar correctamente la conexión y consulta de datos en la base de datos MongoDB. Sin embargo, estos problemas fueron solucionados para garantizar un flujo de trabajo estable y eficiente.

Próximos Pasos
Mejorar la experiencia de usuario (UX) en el proceso de compra.
Añadir un sistema de opiniones y valoraciones para los videojuegos.
Optimizar el rendimiento de la aplicación.
Autor
Jorge Rodríguez Gutiérrez
