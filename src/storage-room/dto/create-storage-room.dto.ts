import { IsArray, IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateStorageRoomDto {
  @IsString()
  name: string;
  @IsOptional()
  @IsMongoId()
  @IsArray()
  products: string[];
}
