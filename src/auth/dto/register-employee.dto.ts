import { IsEmail, MinLength, IsString, IsArray } from 'class-validator';

export class RegisterEmployeeDto {
  @IsString()
  name: string;
  @IsEmail()
  email: string;
  @MinLength(6)
  password: string;
  @IsString()
  employee_id: string;
  @IsString()
  gender: string;
  @IsString()
  contact_phone: string;
  @IsString()
  birth_date: Date;
  @IsString({ each: true })
  @IsArray()
  rol: string[];
}
