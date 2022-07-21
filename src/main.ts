/* eslint-disable prettier/prettier */
import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as cookieParser from "cookie-parser";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(cookieParser());
  app.enableCors({
      origin: 'http://localhost:8080',
      credentials: true
  })

  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap();
