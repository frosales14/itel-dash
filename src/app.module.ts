import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AuthModule } from './auth/auth.module';
import { ConfigModule } from '@nestjs/config';
import { ProductModule } from './product/product.module';
import { CategoryModule } from './category/category.module';
import { CampaignModule } from './campaign/campaign.module';
import { StationModule } from './station/station.module';
import { StorageRoomModule } from './storage-room/storage-room.module';
import { DashboardModule } from './dashboard/dashboard.module';
import { MapsModule } from './maps/maps.module';
import { ProyectModule } from './proyect/proyect.module';
@Module({
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forRoot(process.env.MONGO_URI),
    AuthModule,
    ProductModule,
    CategoryModule,
    CampaignModule,
    StationModule,
    StorageRoomModule,
    DashboardModule,
    MapsModule,
    ProyectModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
