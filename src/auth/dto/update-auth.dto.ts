import { CreateEmployeeDto } from './create-employeedto';
import { PartialType } from '@nestjs/mapped-types';

export class UpdateAuthDto extends PartialType(CreateEmployeeDto) {}
