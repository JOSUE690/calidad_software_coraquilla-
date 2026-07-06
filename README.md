# API Adopción de Mascotas — NestJS

Proyecto con 2 módulos CRUD (Mascota y Adoptante) + tests unitarios de sus services y controllers.

## Cómo correrlo

```bash
npm install
npm run start:dev      # levanta el servidor en http://localhost:3000
npm run test           # corre todos los tests unitarios
npm run test:cov       # corre tests con reporte de cobertura
```

## Estructura

```
src/
├── mascota/
│   ├── dto/create-mascota.dto.ts
│   ├── dto/update-mascota.dto.ts
│   ├── entities/mascota.entity.ts
│   ├── mascota.controller.ts
│   ├── mascota.controller.spec.ts   <- test unitario controller
│   ├── mascota.service.ts
│   ├── mascota.service.spec.ts      <- test unitario service
│   └── mascota.module.ts
├── adoptante/
│   └── (misma estructura)
├── app.module.ts
└── main.ts
```

## Endpoints

**Mascotas** (`/mascotas`): POST, GET, GET/:id, PATCH/:id, DELETE/:id
**Adoptantes** (`/adoptantes`): POST, GET, GET/:id, PATCH/:id, DELETE/:id

## Notas

- Se usa almacenamiento en memoria (arrays) en lugar de una base de datos real,
  para que el proyecto corra sin configuración adicional. Si tu profesor pide
  persistencia real con TypeORM/PostgreSQL, se puede reemplazar fácilmente el
  array interno del service por un `Repository<T>` inyectado — la lógica y los
  tests (mockeando el repositorio en vez del array) se mantienen casi iguales.
- Los tests de **service** prueban la lógica real (CRUD, errores 404).
- Los tests de **controller** mockean el service y verifican que cada método
  del controller invoque correctamente al service correspondiente.
