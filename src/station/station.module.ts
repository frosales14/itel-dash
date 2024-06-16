import { Module } from '@nestjs/common';
import { StationService } from './station.service';
import { StationController } from './station.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Station, StationSchema } from './entities/station.entity';
import {
  Campaign,
  CampaignSchema,
} from 'src/campaign/entities/campaign.entity';
import { Product, ProductSchema } from 'src/product/entities/product.entity';
import { Employee, EmployeeSchema } from 'src/auth/entities/employee';

@Module({
  controllers: [StationController],
  providers: [StationService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Station.name,
        schema: StationSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Campaign.name,
        schema: CampaignSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
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
export class StationModule {}
