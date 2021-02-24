import {Injectable} from "@nestjs/common";
import {UrlShortenInDto} from "./dto/create-in.dto";
import {ShortenDTO} from "./dto/shorten.dto";
import {ShortenRepository} from "./shorten.repository";
import {GenerateStringService} from "src/shared/generate-string/generate-string.service";
import {UrlShortenDto} from "./dto/create.dto";
import {UrlShortenNotFound} from "./exception/urlShortenNotFound";
import {UrlDTO} from "./dto/url.dto";
import {check} from "prettier";
import {UnitExpirationRole} from "./enum/unit_expiration.enum";
import {UrlShortenIsExpiration} from "./exception/urlShortenIsExpiration";
import {DateActionsService} from "src/shared/date-actions/date-actions.service";

@Injectable()
export class ShortenService {
  constructor(
    private shortenRepository: ShortenRepository,
    private generateStringService: GenerateStringService,
    private dateActionsService: DateActionsService,
  ) {}
  async findByParameterUrl(encode: string) {
    const checkTokenGenerate = await this.shortenRepository.findBy({
      token_shortener: encode,
    });

    if (!checkTokenGenerate) throw new UrlShortenNotFound();

    const checkDateIsValid = await this.dateActionsService.isAfterDate(
      new Date(Date.now()),
      checkTokenGenerate.dt_create,
      checkTokenGenerate.unit_expiration,
      checkTokenGenerate.expiration,
    );

    if (!checkDateIsValid) {
      throw new UrlShortenIsExpiration();
    }

    return checkTokenGenerate.url_normal;
  }

  async shorten(urlToShorten: UrlShortenInDto) {
    const generateToken = await this.generateStringService.generate(5, 10);
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

    return new UrlDTO(urlShorten.token_shortener);
  }
}
