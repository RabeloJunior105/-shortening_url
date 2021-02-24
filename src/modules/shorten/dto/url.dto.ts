export class UrlDTO {
  newUrl: string;
  constructor(token_shortener: string) {
    this.newUrl = `${process.env.URL_SERVER}${token_shortener}`;
  }
}
