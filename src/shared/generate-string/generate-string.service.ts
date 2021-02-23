import {Injectable} from "@nestjs/common";

@Injectable()
export class GenerateStringService {
  async generate() {
      
    return Math.random()
      .toString(36)
      .replace(/[^a-z\^0-9]+/g, "")
      .substr(0, 5);
  }
}
