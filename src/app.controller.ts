import {Controller, Get, Param, Res} from "@nestjs/common";
import {ApiTags} from "@nestjs/swagger";
import {AppService} from "./app.service";
import {ShortenService} from "./modules/shorten/shorten.service";

@ApiTags("Shorten")
@Controller()
export class AppController {
  constructor(
    private appService: AppService,
    private shortenService: ShortenService,
  ) {}

  @Get(":encode")
  async dale(@Res() res, @Param() param) {
    const url = await this.shortenService.findByParameterUrl(param.encode);
    res.status(302).redirect(url.url_normal);
  }
}
