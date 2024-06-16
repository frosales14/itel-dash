import { IsBoolean, IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateProductDto {
  @IsString()
  name: string;

  @IsString()
  description;

  @IsString()
  serialNumber;

  @IsString()
  category: string;

  @IsMongoId()
  @IsOptional()
  storageRoom: string;

  @IsMongoId()
  @IsOptional()
  station: string;

  @IsBoolean()
  @IsOptional()
  inUse: boolean;
}
