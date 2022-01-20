import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Connection } from 'typeorm';

async function bootstrap() {
  const app = await NestFactory.createApplicationContext(AppModule);

  const connection = app.get(Connection);
  const result1 = await connection.query('SELECT 1');
  console.log(result1);

  setTimeout(async () => {
    const result2 = await connection.query('SELECT 2');
    console.log(result2);
  }, 1000);

  await app.close();
}
bootstrap();
