import { Module } from '@nestjs/common';
import { DashboardService } from './dashboard.service';
import { DashboardController } from './dashboard.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Station, StationSchema } from 'src/station/entities/station.entity';
import {
  StorageRoom,
  StorageRoomSchema,
} from 'src/storage-room/entities/storage-room.entity';
import {
  Campaign,
  CampaignSchema,
} from 'src/campaign/entities/campaign.entity';
import { Product, ProductSchema } from 'src/product/entities/product.entity';
import {
  Category,
  CategorySchema,
} from 'src/category/entities/category.entity';

@Module({
  controllers: [DashboardController],
  providers: [DashboardService],
  imports: [
    MongooseModule.forFeature([
      {
        name: Station.name,
        schema: StationSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: StorageRoom.name,
        schema: StorageRoomSchema,
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
        name: Category.name,
        schema: CategorySchema,
      },
    ]),
  ],
})
export class DashboardModule {}
