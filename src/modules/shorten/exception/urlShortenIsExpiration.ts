import {AppError} from "../../../shared/error/AppError";

export class UrlShortenIsExpiration extends AppError {
  constructor() {
    super("url encurtada foi expirada", 400);
  }
}
