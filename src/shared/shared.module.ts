import {ValidationPipe} from "./pipes/validation.pipe";
import {Module} from "@nestjs/common";
import {GenerateStringService} from "./generate-string/generate-string.service";
import {DateActionsService} from "./date-actions/date-actions.service";

@Module({
  providers: [ValidationPipe, GenerateStringService, DateActionsService],
  exports: [ValidationPipe, GenerateStringService, DateActionsService],
  imports: [],
})
export class SharedModule {}
