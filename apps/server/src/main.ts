import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import cookieParser from 'cookie-parser';

import { isProdEnv } from './util';
import { AppModule } from './app/app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = app.get(ConfigService);
  const serverPort = config.get('app.serverPort') || 3000;
  const domainOrigin = config.get('app.domainUrl');
  const globalPrefix = 'api';

  app.use(cookieParser());
  app.enableCors({
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Content-Type', 'Authorization', 'X-CSRF-TOKEN'],
    origin: domainOrigin,
  });

  app.setGlobalPrefix(globalPrefix);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));

  await app.listen(serverPort);

  Logger.log(
    `🚀 Application is running on:${domainOrigin}:${serverPort}/${globalPrefix}`
  );
  Logger.log(`${isProdEnv() ? '🚀 Production' : '🚧 Development'} environment`);
}

bootstrap();
