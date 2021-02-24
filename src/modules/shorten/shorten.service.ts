import {Injectable} from "@nestjs/common";
import {UrlShortenInDto} from "./dto/create-in.dto";
import {ShortenRepository} from "./shorten.repository";
import {GenerateStringService} from "../../shared/generate-string/generate-string.service";
import {UrlShortenDto} from "./dto/create.dto";
import {UrlShortenNotFound} from "./exception/urlShortenNotFound";
import {UrlDTO} from "./dto/url.dto";
import {UrlShortenIsExpiration} from "./exception/urlShortenIsExpiration";
import {DateActionsService} from "../../shared/date-actions/date-actions.service";
import { ShortenDTO } from "./dto/shorten.dto";

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

    return checkTokenGenerate;
  }

  async shorten(urlToShorten: UrlShortenInDto): Promise<UrlDTO>{
    const generateToken = await this.generateStringService.generate(5, 10);
    const checkTokenExists = await this.shortenRepository.findBy({
      token_shortener: generateToken,
    });

    /*if (checkTokenExists &&) {
      return checkTokenExists;
    }
*/
    const urlShorten = new UrlShortenDto();
    urlShorten.url_normal = urlToShorten.url;
    urlShorten.token_shortener = generateToken;
    urlShorten.unit_expiration = urlToShorten.unit_expiration;
    urlShorten.url_normal = urlToShorten.url;

    await this.shortenRepository.store(urlShorten);

    return new UrlDTO(urlShorten.token_shortener);
  }
}
