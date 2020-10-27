import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as config from 'config';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap () {
  const serverConfig = config.get('server');

  const app = await NestFactory.create(AppModule);

  app.useGlobalPipes(new ValidationPipe({
    transform: true
  }));

  const options = new DocumentBuilder()
    .setTitle('API Encurtador de URLs')
    .setDescription('Serviço para criar urls curtas')
    .setVersion('1.0')
    .build();
  const document = SwaggerModule.createDocument(app, options);

  SwaggerModule.setup('api', app, document, {
    swaggerOptions: {
      docExpansion: 'none',
      defaultModelsExpandDepth: -1
    }
  });

  const port = serverConfig.port;
  await app.listen(port);
}

bootstrap();
