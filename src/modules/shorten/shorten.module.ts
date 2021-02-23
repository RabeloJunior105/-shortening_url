import {Module} from "@nestjs/common";
import {ShortenService} from "./shorten.service";
import {ShortenController} from "./shorten.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ShortenRepository} from "./shorten.repository";
import {SharedModule} from "src/shared/shared.module";
import {GenerateStringService} from "src/shared/generate-string/generate-string.service";

@Module({
  imports: [TypeOrmModule.forFeature([ShortenRepository]), SharedModule],
  providers: [ShortenService, GenerateStringService],
  controllers: [ShortenController],
  exports: [ShortenService],
})
export class ShortenModule {}
