import {Injectable} from "@nestjs/common";

@Injectable()
export class GenerateStringService {
  async generate(min: number, max: number) {
    return Math.random()
      .toString(36)
      .replace(/[^a-z\^0-9]+/g, "")
      .substr(0, Math.floor(Math.random() * (max - min + 1)) + min);
  }
}
