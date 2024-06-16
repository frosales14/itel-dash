import { Employee } from '../entities/employee';

export interface LoginResponse {
  employee: Employee;
  token: string;
}
