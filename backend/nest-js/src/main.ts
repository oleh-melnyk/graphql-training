import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: true });
  const configService = app.get(ConfigService);
  const host = configService.get<string>('API_HOST');
  const port = configService.get<number>('API_PORT');

  await app.listen(port || 3001).then(() => {
    console.log(`Application is started on ${host}:${port}`);
  });
}
bootstrap();
