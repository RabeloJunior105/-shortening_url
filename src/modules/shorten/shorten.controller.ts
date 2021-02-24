import {ValidationPipe} from "../../shared/pipes/validation.pipe";
import {Body, Controller, Post} from "@nestjs/common";
import {ApiOperation, ApiResponse, ApiTags} from "@nestjs/swagger";
import {UrlShortenInDto} from "./dto/create-in.dto";
import {ShortenService} from "./shorten.service";

@ApiTags("Shorten")
@Controller("shorten")
export class ShortenController {
  constructor(private shortenService: ShortenService) {}

  @Post()
  @ApiOperation({summary: "Creating the url shorten"})
  @ApiResponse({status: 200, description: "Returning the url shorting"})
  async create(@Body(new ValidationPipe()) urlToShorten: UrlShortenInDto) {
    return await this.shortenService.shorten(urlToShorten);
  }
}
