import { Module } from '@nestjs/common';
import { ActivitiesService } from './activities.service';
import { ActivitiesController } from './activities.controller';
import { ActivitiesSchema, Activity } from './entities/activity.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Employee, EmployeeSchema } from 'src/auth/entities/employee';
import { Proyect, ProyectSchema } from 'src/proyect/entities/proyect.entity';

@Module({
  controllers: [ActivitiesController],
  providers: [ActivitiesService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Activity.name,
        schema: ActivitiesSchema,
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
        name: Proyect.name,
        schema: ProyectSchema,
      },
    ]),
  ],
})
export class ActivitiesModule {}
