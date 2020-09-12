import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as bodyParser from 'body-parser';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(bodyParser.urlencoded({extended : false}));
  app.use(bodyParser.json());
  app.enableCors();
  await app.listen(5000);
  console.log('server running on port : 5000')
}
bootstrap();
