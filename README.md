<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>

[circleci-image]: https://img.shields.io/circleci/build/github/nestjs/nest/master?token=abc123def456
[circleci-url]: https://circleci.com/gh/nestjs/nest

## Description

Microservicio que contiene las funcionalidades que realizara la tienda online web.

## Project setup

```bash
$ npm install

- Node.js (v18 o superior)
- npm
- Docker (opcional para desarrollo)

## Empezando

### Instalación

1. Clonar el repositorio:
```bash
git clone [repository-url]
cd ms-bff-web
```

2. Instalar dependencias:
```bash
npm install
```

### Desarrollo

1. Iniciar el servidor de desarrollo:
```bash
npm run start:dev
```

2. Documentación Swagger:
```bash
http://localhost:3000/doc
```

### Construcción en Producción

1. Construir para producción:
```bash
npm run build
```

2. Ejecutar en producción:
```bash
npm run start:prod
```

## Despliegue con Docker

El proyecto incluye un Dockerfile para despliegue en contenedor. Construir y ejecutar el contenedor:

```bash
npm run docker:build
npm run docker:run
```

## Variables de Entorno

La aplicación utiliza variables de entorno para la configuración. Crea un archivo `.env` con las siguientes variables:

```env
PORT=3000
URL_MS_BS_USER=http://localhost:3002
URL_MS_BS_SALE=http://localhost:3003
```

## Estructura del Proyecto

```
ms-bff-web/
├── src/              # Código fuente
│   ├── app/         # Módulo principal
│   ├── config/      # Configuración
│   ├── modules/     # Módulos de negocio
│   ├── common/      # Utilidades compartidas
│   └── main.ts      # Punto de entrada
├── test/            # Tests
├── docker/          # Configuración Docker
├── .env             # Variables de entorno
├── docker-compose.yml # Compose para desarrollo
└── package.json     # Dependencias y scripts
```

## Herramientas de Desarrollo

- **Formateo de Código**: ESLint
- **Pruebas**: Jest
- **Documentación**: Swagger

## Licencia

Este proyecto está licenciado bajo la Licencia MIT - ver el archivo LICENSE para detalles.

## Contribuyendo

1. Fork del repositorio
2. Crea tu rama de características (`git checkout -b feature/AmazingFeature`)
3. Commit tus cambios (`git commit -m 'Añadir alguna AmazingFeature'`)
4. Push a la rama (`git push origin feature/AmazingFeature`)
5. Abre una Pull Request

## Autores

- Erick Aguila - Trabajo inicial

## Documentación

- [Documentación de NestJS](https://docs.nestjs.com)
- [Documentación de TypeScript](https://www.typescriptlang.org/docs)
- [Documentación de Swagger](https://swagger.io/docs)
- [Documentación de Redis](https://redis.io/docs)

## Estado del Proyecto

[![GitHub issues](https://img.shields.io/github/issues/yourusername/ms-bff-web)](https://github.com/yourusername/ms-bff-web/issues)
[![GitHub license](https://img.shields.io/github/license/yourusername/ms-bff-web)](https://github.com/yourusername/ms-bff-web/blob/main/LICENSE)
[![GitHub stars](https://img.shields.io/github/stars/yourusername/ms-bff-web)](https://github.com/yourusername/ms-bff-web/stargazers)

---

Hecho con ❤️ por Erick Aguila
