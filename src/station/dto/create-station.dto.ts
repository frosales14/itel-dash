import { IsBoolean, IsMongoId, IsOptional, IsString } from 'class-validator';
import { Employee } from 'src/auth/entities/employee';
import { Product } from 'src/product/entities/product.entity';

export class CreateStationDto {
  @IsString()
  number: string;
  @IsMongoId()
  @IsOptional()
  campaign: string;
  @IsString()
  @IsOptional()
  rol: string;
  @IsString()
  @IsOptional()
  status: string;
  @IsMongoId()
  @IsOptional()
  monitor1: Product;
  @IsMongoId()
  @IsOptional()
  monitor2: Product;
  @IsMongoId()
  @IsOptional()
  CPU: Product;
  @IsMongoId()
  @IsOptional()
  battery: Product;
  @IsBoolean()
  @IsOptional()
  periferals: boolean;
  @IsBoolean()
  @IsOptional()
  internet: boolean;
  @IsString()
  @IsOptional()
  macAddress: string;
  @IsString()
  @IsOptional()
  hostname: string;
  @IsMongoId()
  @IsString()
  @IsOptional()
  lastCheckBy: Employee;
}
