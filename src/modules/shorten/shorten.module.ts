import {Module} from "@nestjs/common";
import {ShortenService} from "./shorten.service";
import {ShortenController} from "./shorten.controller";
import {TypeOrmModule} from "@nestjs/typeorm";
import {ShortenRepository} from "./shorten.repository";
import {SharedModule} from "../../shared/shared.module";
import {GenerateStringService} from "../../shared/generate-string/generate-string.service";
import {DateActionsService} from "../../shared/date-actions/date-actions.service";

@Module({
  imports: [TypeOrmModule.forFeature([ShortenRepository]), SharedModule],
  providers: [ShortenService, GenerateStringService, DateActionsService],
  controllers: [ShortenController],
  exports: [ShortenService],
})
export class ShortenModule {}
