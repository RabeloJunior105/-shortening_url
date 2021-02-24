import {UnitExpirationRole} from "../enum/unit_expiration.enum";

export class UrlShortenDto {
  id: number;
  url_normal: string;
  token_shortener: string;
  dt_create: Date;
  expiration?: number;
  unit_expiration?: UnitExpirationRole;
}
