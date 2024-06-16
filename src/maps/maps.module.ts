import { Module } from '@nestjs/common';
import { MapsService } from './maps.service';
import { MapsController } from './maps.controller';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { MapSchema } from './entities/map.entity';
import { Station, StationSchema } from 'src/station/entities/station.entity';
import {
  Campaign,
  CampaignSchema,
} from 'src/campaign/entities/campaign.entity';

@Module({
  controllers: [MapsController],
  providers: [MapsService],
  imports: [
    ConfigModule.forRoot(),
    MongooseModule.forFeature([
      {
        name: Map.name,
        schema: MapSchema,
      },
    ]),
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
  ],
})
export class MapsModule {}
