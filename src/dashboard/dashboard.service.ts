import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Campaign } from 'src/campaign/entities/campaign.entity';
import { Product } from 'src/product/entities/product.entity';
import { Station } from 'src/station/entities/station.entity';
import { StorageRoom } from 'src/storage-room/entities/storage-room.entity';
import { DashboardCards } from './models/interfaces/dashboard-card-info.interface';

@Injectable()
export class DashboardService {
  constructor(
    @InjectModel(Product.name)
    private productModel: Model<Product>,
    @InjectModel(Campaign.name)
    private campaignModel: Model<Campaign>,
    @InjectModel(Station.name)
    private stationModel: Model<Station>,
    @InjectModel(StorageRoom.name)
    private storageRoomModel: Model<StorageRoom>,
  ) {}

  async dashboardCards() {
    const products = await this.productModel.countDocuments();
    const campaign = await this.campaignModel.countDocuments();
    const station = await this.stationModel.countDocuments();
    const storageRoom = await this.storageRoomModel.countDocuments();

    const cardsData: DashboardCards = {
      campaign,
      products,
      station,
      storageRoom,
    };

    return cardsData;
  }

  async getStationsxCampaign() {
    const stations = await this.stationModel
      .find()
      .populate('campaign', '_id name');

    const campaigns = await this.campaignModel.find();

    const labels = [];
    const series = [];

    campaigns.forEach((campaign) => {
      labels.push(campaign.name);
    });

    labels.forEach((label) => {
      const filteredStations = stations.filter(
        (station) => station.campaign[0].name == label,
      );

      series.push(filteredStations.length);
    });

    return {
      labels,
      series,
    };
  }
}
