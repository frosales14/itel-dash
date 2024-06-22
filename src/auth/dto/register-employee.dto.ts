import {
  IsEmail,
  MinLength,
  IsString,
  IsArray,
  IsOptional,
} from 'class-validator';

export class RegisterEmployeeDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @MinLength(6)
  @IsOptional()
  password: string;
  @IsString()
  employee_id: string;
  @IsString()
  gender: string;
  @IsString()
  contact_phone: string;
  @IsString()
  @IsOptional()
  birth_date: Date;
  @IsString({ each: true })
  @IsArray()
  rol: string[];
}
