import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as helmet from 'helmet';
import * as rateLimit from 'express-rate-limit';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const catDocument = new DocumentBuilder()
    .setTitle('Cats API Documentation')
    .setDescription('The cats API description')
    .setVersion('1.0')
    .addTag('cats')
    .build();

  const document = SwaggerModule.createDocument(app, catDocument);
  SwaggerModule.setup('api/docs', app, document);

  app.enableCors();

  app.use(helmet({
    hidePoweredBy: {
      setTo: 'PHP/7.0.27',
    },
  }));

  app.use(rateLimit({
    windowMs: 15 * 60 * 1000, // 15 minutes
    max: 100, // limit each IP to 100 requests per windowMs
  }));

  await app.listen(3000);
}
bootstrap();
