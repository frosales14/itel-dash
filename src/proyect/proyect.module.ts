import { Module } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { ProyectController } from './proyect.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Proyect, ProyectSchema } from './entities/proyect.entity';
import { Employee, EmployeeSchema } from 'src/auth/entities/employee';

@Module({
  controllers: [ProyectController],
  providers: [ProyectService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Proyect.name,
        schema: ProyectSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Employee.name,
        schema: EmployeeSchema,
      },
    ]),
  ],
})
export class ProyectModule {}
