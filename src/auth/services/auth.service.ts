import {
  BadRequestException,
  Injectable,
  InternalServerErrorException,
  UnauthorizedException,
} from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import * as bcryptjs from 'bcryptjs';

import { CreateEmployeeDto } from '../dto/create-employeedto';
import { UpdateAuthDto } from '../dto/update-auth.dto';
import { Employee } from '../entities/employee';
import { LoginDto } from '../dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload } from '../interfaces/jwt-payload.interface';
import { RegisterEmployeeDto } from '../dto';
import { LoginResponse } from '../interfaces/login-response.interface';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(Employee.name)
    private employeeModel: Model<Employee>,
    private jwtService: JwtService,
  ) {}

  async create(createEmployeeDto: CreateEmployeeDto): Promise<Employee> {
    try {
      const { password, ...employeeData } = createEmployeeDto;

      const newEmployee = new this.employeeModel({
        password: bcryptjs.hashSync(password, 10),
        ...employeeData,
      });

      await newEmployee.save();

      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const { password: _, ...user } = newEmployee.toJSON();

      return user;
    } catch (error) {
      if (error.code === 11000) {
        throw new BadRequestException(
          `${createEmployeeDto.email} is already register`,
        );
      }
      throw new InternalServerErrorException('something went wrong');
    }
  }

  async login(loginDto: LoginDto): Promise<LoginResponse> {
    const { email, password } = loginDto;
    const employee = await this.employeeModel.findOne({ email });

    if (!employee) {
      throw new UnauthorizedException('invalid credentials');
    }

    if (!bcryptjs.compareSync(password, employee.password)) {
      throw new UnauthorizedException('invalid credentials');
    }

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...rest } = employee.toJSON();

    return {
      employee: rest,
      token: this.getJwtToken({ id: employee.id }),
    };
  }

  async register(
    registerStudentDto: RegisterEmployeeDto,
  ): Promise<LoginResponse> {
    const employee = await this.create(registerStudentDto);

    return {
      employee,
      token: this.getJwtToken({ id: employee._id }),
    };
  }

  async findById(id: string) {
    const student = await this.employeeModel.findById(id);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { password: _, ...rest } = student.toJSON();
    return rest;
  }

  async findAll(): Promise<Employee[]> {
    return await this.employeeModel.find();
  }

  // async findOne(id: string) {
  //   try {
  //     const estudent = await this.studentModel.findById(id);
  //   } catch (error) {

  //   }
  // }

  update(id: number, updateAuthDto: UpdateAuthDto) {
    return `This action updates a #${id} auth`;
  }

  remove(id: number) {
    return `This action removes a #${id} auth`;
  }

  getJwtToken(payload: JwtPayload) {
    const token = this.jwtService.sign(payload);

    return token;
  }
}
