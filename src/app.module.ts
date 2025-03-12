import { Logger, MiddlewareConsumer, Module } from '@nestjs/common';
import { UsersModule } from './modules/users/users.module';
import { ProductsModule } from './modules/products/products.module';
import { LoggerMiddleware } from './shared/middleware/logger.middleware';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { configEnv } from './shared/config/env.config';
import { HttpCustomModule } from './providers/http-custom/http-custom.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '../.env',
      load: [configEnv], // Carga la configuración de las variables de entorno
    }),
    UsersModule,
    ProductsModule,
    HttpCustomModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }

  constructor(private readonly configService: ConfigService) {
    const logger = new Logger(AppModule.name);
    logger.verbose(`CONFIG_VAR: => ${JSON.stringify(configEnv())}`);
  }
}
