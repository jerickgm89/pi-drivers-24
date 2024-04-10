# Proyecto Individual Drivers
Este proyecto es una aplicacion Full-Stack para la gestion de Drives y Teams de Formula 1. La parte del frontend esta realizada en React y la parte del backend en Node.js con Express. La base de datos utilizada es PostgreSQL.
  
## Empezando 🚀
Si deseas ver el proyecto puedes copiar este repositorio en tu maquina local y seguir los pasos de instalacion.

1. Clona este repositorio
2. Instala las dependencias necesarias, el frontend inicialmente lo realice con bun y la parte de backend con npm.
   1. `bun run install` - Frontend asegurate estar en la carpeta de `client/`
3. Inicializa el servidor de backend con el comando npm start
   1. `npm install` - Backend asegurate estar en la carpeta de `server/`
4. Para empezar con el frontend ejecuta el comando `bun run dev` en la carpeta de `client/`
5. Para empezar con el backend ejecuta el comando `npm start` en la carpeta de `server/`

## Estrucutra de carpetas 📁

Este proyecto esta divido en dos carpetas principales, `client/` y `server/`. En la carpeta de `client/` se encuentra el frontend y en la carpeta de `server/` se encuentra el backend.

### Client 💻
El️ cliente esta realizado en React y esta dividido en las siguientes carpetas:
```
└── 📁client
    └── package.json
    └── 📁public
    └── 📁src
        └── main.jsx
        └── DrivesApp.jsx
        └── 📁components
            └── 📁card
            └── 📁footer
            └── 📁navbar
            └── 📁searchAndSort
        └── 📁drivers
            └── 📁pages
            └── 📁routes
            └── 📁utils
        └── 📁home
            └── 📁pages
            └── 📁routes
        └── 📁hooks
        └── 📁router
        └── 📁scss
            └── index.scss
        └── 📁services
        └── 📁store
            └── 📁api
                └── driversApi.js
            └── 📁drivers
                └── driverSlice.js
                └── driverThunks.js
            └── store.js
```
### Server 🖥️

El️ servidor esta realizado en Node.js con Express y ORM con Sequelize y esta dividido en las siguientes carpetas:

```
└── 📁server
    └── 📁api
        └── db.json
    └── index.js
    └── 📁src
        └── db.js
        └── server.js
        └── 📁controllers
            └── driverController.js
            └── teamController.js
        └── 📁models
            └── Driver.js
            └── Teams.js
        └── 📁repositories
            └── driversRepository.js
            └── teamRepository.js
        └── 📁routes
            └── index.js
            └── routesDriver.js
            └── routesTeam.js
        └── 📁services
            └── driverService.js
            └── teamService.js
        └── 📁utils
            └── fetchApi.js
            └── formatSendResponse.js
```

## Construido con 🛠️
- [React](https://es.reactjs.org/) - Libreria de JavaScript para construir interfaces de usuario.
- [React Router](https://reactrouter.com/) - Libreria para manejar rutas en React.
- [Redux](https://es.redux.js.org/) - Libreria para manejar el estado de la aplicacion.
- [toolkit](https://redux-toolkit.js.org/) - Conjunto de herramientas para Redux.
- [RTK Query](https://redux-toolkit.js.org/rtk-query/overview) - Conjunto de herramientas para Redux.
- [Node.js](https://nodejs.org/en) - Entorno de ejecución para JavaScript construido con el motor de JavaScript V8 de Chrome.
- [Express](https://expressjs.com/es/) - Framework de Node.js que permite crear aplicaciones web.
- [axios](https://axios-http.com/) - Cliente HTTP basado en promesas para el navegador y node.js.
- [Sequelize](https://sequelize.org/) - ORM para Node.js.
- [PostgreSQL](https://www.postgresql.org/) - Base de datos relacional.
- [dotenv](https://www.npmjs.com/package/dotenv) - Modulo para cargar variables de entorno.
- [Sass](https://sass-lang.com/) - Preprocesador de CSS.






