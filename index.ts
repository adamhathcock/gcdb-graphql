import { ValidationPipe } from "@nestjs/common";
import { NestFactory } from "@nestjs/core";
import { ApplicationModule } from "./src/ApplicationModule";

async function bootstrap(): Promise<void> {
  const app = await NestFactory.create(ApplicationModule);
  app.useGlobalPipes(new ValidationPipe());
  await app.listen(3000);
}
bootstrap().catch(e => console.log(e));
