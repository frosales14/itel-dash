import { Module } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { ProyectController } from './proyect.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Proyect, ProyectSchema } from './entities/proyect.entity';
import { Employee, EmployeeSchema } from 'src/auth/entities/employee';
import { Activity } from 'src/activities/entities/activity.entity';
import { ActivitiesSchema } from '../activities/entities/activity.entity';

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
    MongooseModule.forFeature([
      {
        name: Activity.name,
        schema: ActivitiesSchema,
      },
    ]),
  ],
})
export class ProyectModule {}
