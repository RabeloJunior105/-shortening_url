import { UrlShortenInDto } from "../../dto/create-in.dto";
import {UrlShortenDto} from "../../dto/create.dto";
import {ShortenDTO} from "../../dto/shorten.dto";
import { UnitExpirationRole } from "../../enum/unit_expiration.enum";

export default class TestUtil {
  static giveMeFindParam(): ShortenDTO {
    const shorten = new ShortenDTO(
      1,
      "www.google.com.br",
      "ds15a",
      new Date(Date.now()),
      10,
      "dias",
    );

    return shorten;
  }

}
