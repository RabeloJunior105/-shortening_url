import {Injectable} from "@nestjs/common";
import {UrlShortenInDto} from "./dto/create-in.dto";
import {ShortenDTO} from "./dto/shorten.dto";
import {ShortenRepository} from "./shorten.repository";
import {GenerateStringService} from "src/shared/generate-string/generate-string.service";
import {UrlShortenDto} from "./dto/create.dto";

@Injectable()
export class ShortenService {
  constructor(
    private shortenRepository: ShortenRepository,
    private generateStringService: GenerateStringService,
  ) {}
  async findByParameterUrl() {}

  async shorten(urlToShorten: UrlShortenInDto) {
    const generateToken = await this.generateStringService.generate();

    const checkTokenExists = await this.shortenRepository.findBy({
      token_shortener: generateToken,
    });

    if (checkTokenExists) {
      return checkTokenExists.url_normal;
    }

    const urlShorten = new UrlShortenDto();
    urlShorten.url_normal = urlToShorten.url;
    urlShorten.token_shortener = generateToken;
    urlShorten.unit_expiration = urlToShorten.unit_expiration;
    urlShorten.url_normal = urlToShorten.url;

    await this.shortenRepository.store(urlShorten);

    return {newUrl: process.env.URL_SERVER + urlShorten.token_shortener};
  }
}
