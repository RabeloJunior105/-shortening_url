import {ValidationPipe} from "./shared/pipes/validation.pipe";
import {NestFactory} from "@nestjs/core";
import {AppModule} from "./app.module";
import {NestExpressApplication} from "@nestjs/platform-express";
import {SwaggerModule, DocumentBuilder} from "@nestjs/swagger";
import * as dotenv from "dotenv";
import {ErrorsInterceptor} from "./shared/error/Errors.interceptor";
dotenv.config();

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: "*",
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    preflightContinue: false,
  });

  app.useGlobalInterceptors(new ErrorsInterceptor());

  const options = new DocumentBuilder()
    .setTitle("Wiser Educação")
    .setDescription("Serviço de encurtamento de URL")
    .setVersion("0.1.0")
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup("docs", app, document);

  await app.listen(3000);
}
bootstrap();
