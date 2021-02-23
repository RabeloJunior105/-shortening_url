import {DeepPartial, EntityRepository, Repository} from "typeorm";
/* import {ShortenCreateDto} from "./dto/create.dto";
import {ShortenEditDto} from "./dto/edit.dto";
import {ShortenDTO} from "./dto/rules.dto"; */
import {Shorten} from "./shorten.entity";

@EntityRepository(Shorten)
export class ShortenRepository extends Repository<Shorten> {

  async findById(id: number): Promise<Shorten> {
    return await this.findOne(id);
  }

  async findBy(paramToSearch) {
    return await this.findOne({where: paramToSearch});
  }

  async store(rulesToBeCreated: any): Promise<any> {
    return await this.insert(rulesToBeCreated);
  }
}
