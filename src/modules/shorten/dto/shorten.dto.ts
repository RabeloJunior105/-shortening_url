

export class ShortenDTO {
    id: number;
    url_normal: string;
    token_shortener: string;
    dt_create: Date;
    expiration: number;
    unit_expiration: "segundos" | "minutos" | "horas" | "dias";

  constructor(
    id: number,
    url_normal: string,
    token_shortener: string,
    dt_create: Date,
    expiration: number,
    unit_expiration: "segundos" | "minutos" | "horas" | "dias",
  ) {
    this.id = id;
    this.url_normal = url_normal;
    this.token_shortener = token_shortener;
    this.dt_create = dt_create;
    this.expiration = expiration;
    this.unit_expiration = unit_expiration;
  }
}
