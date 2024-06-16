import { Injectable } from '@nestjs/common';
import { CreateCampaignDto } from './dto/create-campaign.dto';
import { UpdateCampaignDto } from './dto/update-campaign.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Campaign } from './entities/campaign.entity';
import { Model } from 'mongoose';

@Injectable()
export class CampaignService {
  constructor(
    @InjectModel(Campaign.name)
    private campaignModel: Model<Campaign>,
  ) {}

  create(createCampaignDto: CreateCampaignDto) {
    const newCampaign = new this.campaignModel({
      ...createCampaignDto,
    });

    try {
      newCampaign.save();
    } catch (error) {}
  }

  async findAll() {
    let campaign = [];
    campaign = await this.campaignModel.find();

    return campaign;
  }

  findOne(id: string) {
    return this.campaignModel.findById(id);
  }

  async update(id: string, updateCampaignDto: UpdateCampaignDto) {
    return this.campaignModel.findByIdAndUpdate(id, updateCampaignDto, {
      new: true,
    });
  }
}
