import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Habilitar las validaciones globalmente
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true, // Elimina propiedades no declaradas en el DTO
      forbidNonWhitelisted: true, // Lanza una excepción si se envían propiedades no permitidas
      transform: true, // Transforma la data al tipo definido en los DTOs
    }),
  );

  // Habilitar CORS
  app.enableCors({
    origin: '*', // Permite todas las solicitudes (ajústalo según sea necesario)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    allowedHeaders: 'Content-Type, Authorization',
  });

  //Configuración de Swagger
  const config = new DocumentBuilder()
    .setTitle('ms-bff-web')
    .setDescription(
      'Microservicio para centralizar las peticiones realizadas por el frontend',
    )
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('doc', app, documentFactory);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
