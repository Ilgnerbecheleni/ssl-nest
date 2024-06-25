/* eslint-disable prettier/prettier */
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as fs from 'fs';


async function bootstrap() {
  const httpsOptions = {
    key: fs.readFileSync('../ssl/server.key'),
    cert: fs.readFileSync('../ssl/server.cert')
  };
  const app = await NestFactory.create(AppModule, {
    httpsOptions,
  });
  await app.listen(3000);
}
bootstrap();
