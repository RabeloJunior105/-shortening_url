import {Controller, Get, Res} from "@nestjs/common";
import { ApiTags } from "@nestjs/swagger";
import {AppService} from "./app.service";
import { ShortenService } from "./modules/shorten/shorten.service";

@ApiTags("Shorten")
@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private shortenService: ShortenService,
  ) {}

  @Get(":encode")
  async redirect(@Res() res) {
    res.status(302).redirect("https://www.google.com.br");
  }
}
