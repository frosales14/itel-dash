import { IsMongoId, IsOptional, IsString } from 'class-validator';

export class CreateActivityDto {
  @IsString()
  name: string;

  @IsString()
  description: string;

  @IsMongoId()
  @IsOptional()
  responsible: string;

  @IsString()
  status: 'done' | 'pending' | 'in progress';
}
