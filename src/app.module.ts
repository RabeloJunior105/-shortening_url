import {Module} from "@nestjs/common";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ConfigModule, ConfigService} from "@nestjs/config";

import {AppController} from "./app.controller";
import {Connection} from "typeorm";
import {AppService} from "./app.service";
import {SharedModule} from "./shared/shared.module";
import {ShortenModule} from "./modules/shorten/shorten.module";
import { ShortenService } from "./modules/shorten/shorten.service";
import { ShortenRepository } from "./modules/shorten/shorten.repository";
@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: "postgres",
      host: process.env.DB_HOST,
      port: 5432,
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_DATABASE,
      synchronize: false,
      entities: ["./dist/src/**/*.entity.js"],
    }),
    TypeOrmModule.forFeature([ShortenRepository]),
    SharedModule,
    ShortenModule,
  ],
  controllers: [AppController],
  providers: [AppService, ShortenService],
})
export class AppModule {
  constructor(
    private connection: Connection,
    private configService: ConfigService,
  ) {}
}
