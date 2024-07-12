import { IsArray, IsOptional, IsString } from 'class-validator';

export class CreateProyectDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsArray()
  user: string[];

  @IsString()
  @IsOptional()
  status: string;

  @IsArray()
  @IsOptional()
  activities: string[];
}
