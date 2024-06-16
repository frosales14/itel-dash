import { Module } from '@nestjs/common';
import { AuthService } from './services/auth.service';
import { AuthController } from './controllers/auth.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from './entities/employee';
import { JwtModule } from '@nestjs/jwt';
import { ConfigModule } from '@nestjs/config';
import { RolService } from './services/rol.service';
import { Rol, RolSchema } from './entities/rol';
import { RolController } from './controllers/rol.controller';

@Module({
  controllers: [AuthController, RolController],
  providers: [AuthService, RolService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Employee.name,
        schema: EmployeeSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Rol.name,
        schema: RolSchema,
      },
    ]),
    JwtModule.register({
      global: true,
      secret: process.env.JWT_SEED,
      signOptions: { expiresIn: '6h' },
    }),
  ],
})
export class AuthModule {}
