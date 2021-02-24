import {ApiProperty, ApiPropertyOptional} from "@nestjs/swagger";
import {
  IsEnum,
  IsNumber,
  IsOptional,
  IsUrl,
} from "class-validator";
import {UnitExpirationRole} from '../enum/unit_expiration.enum'

export class UrlShortenInDto {
  /**
   * DTO de cadastro para encurtar a URL
   * @example http://localhost:3000/
   * 
   * 
   * 
   */

  @ApiProperty({
    example: "www.google.com.br",
    description: "URL a ser encurtada",
  })
  @IsUrl()
  url: string;

  @ApiPropertyOptional({
    example: 15,
    default: 10,
    description: "Tempo de expiração da URL encurtada",
  })
  @IsOptional()
  @IsNumber()
  expiration?: number;

  @ApiPropertyOptional({
    example: "segundos",
    default: "minutos",
    type: "ENUM",
    enum:["segundos", "minutos", "horas", "dias"],
    description: "Unidade de médida para calcular a expiração",
  })
  @IsOptional()
  @IsEnum(UnitExpirationRole, { each: true })
  unit_expiration?: UnitExpirationRole;
}
