import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AuthService } from '../services/auth.service';
import {
  CreateEmployeeDto,
  UpdateAuthDto,
  LoginDto,
  RegisterEmployeeDto,
} from '../dto';
import { AuthGuard } from '../guards/auth.guard';
import { Employee } from '../entities/employee';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post()
  create(@Body() createEmployeeDto: CreateEmployeeDto) {
    return this.authService.create(createEmployeeDto);
  }

  @Post('/login')
  login(@Body() loginDto: LoginDto) {
    return this.authService.login(loginDto);
  }

  @Post('/register')
  register(@Body() registerEmployee: RegisterEmployeeDto) {
    return this.authService.register(registerEmployee);
  }

  @UseGuards(AuthGuard)
  @Get()
  findAll() {
    return this.authService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get('/check-token')
  checkToken(@Request() req: Request) {
    const employee = req['employee'] as Employee;

    return {
      employee,
      token: this.authService.getJwtToken({ id: employee._id }),
    };
  }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.authService.findOne(+id);
  // }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAuthDto: UpdateAuthDto) {
    return this.authService.update(+id, updateAuthDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.authService.remove(+id);
  }
}
