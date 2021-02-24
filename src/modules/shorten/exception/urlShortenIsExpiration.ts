import {AppError} from "src/shared/error/AppError";

export class UrlShortenIsExpiration extends AppError {
  constructor() {
    super("url encurtada foi expirada", 400);
  }
}
