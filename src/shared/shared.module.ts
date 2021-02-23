import {ValidationPipe} from "./pipes/validation.pipe";
import {Module} from "@nestjs/common";
import {GenerateStringService} from "./generate-string/generate-string.service";

@Module({
  providers: [ValidationPipe, GenerateStringService],
  exports: [ValidationPipe, GenerateStringService],
  imports: [],
})
export class SharedModule {}
