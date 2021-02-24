import {AppError} from "src/shared/error/AppError";

export class UrlShortenNotFound extends AppError {
  constructor() {
    super("Url encurtada não existe", 404);
  }
}
