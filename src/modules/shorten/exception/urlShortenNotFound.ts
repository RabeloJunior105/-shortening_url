import {AppError} from "../../../shared/error/AppError";

export class UrlShortenNotFound extends AppError {
  constructor() {
    super("Url encurtada não existe", 404);
  }
}
