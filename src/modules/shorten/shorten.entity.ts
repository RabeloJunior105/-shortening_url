import { ApiProperty, ApiResponseProperty } from "@nestjs/swagger";
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm";
import { UnitExpirationRole } from "./enum/unit_expiration.enum";

@Entity({ name: "url" })
export class Shorten {

  /**
   * Entidade de cadastro da URL a ser encurtada
   * @example http://localhost:3000/
   */

  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'www.google.com.br', description: 'URL a ser encurtada' })
  @Column()
  url_normal: string;

  @ApiResponseProperty({ example: `xa4er` })
  @Column()
  token_shortener: string;

  @Column()
  dt_create: Date;

  @Column()
  expiration: number;

  @Column("enum")
  unit_expiration: UnitExpirationRole
}
