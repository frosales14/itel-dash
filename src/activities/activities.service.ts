import { Injectable } from '@nestjs/common';
import { CreateActivityDto } from './dto/create-activity.dto';
import { UpdateActivityDto } from './dto/update-activity.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Activity } from './entities/activity.entity';
import { Model } from 'mongoose';

@Injectable()
export class ActivitiesService {
  constructor(
    @InjectModel(Activity.name)
    private activityModel: Model<Activity>,
  ) {}

  async create(createActivityDto: CreateActivityDto) {
    const newActivity = new this.activityModel({ ...createActivityDto });

    try {
      newActivity.save();
      return newActivity;
    } catch (error) {}
  }

  findAll() {
    return this.activityModel.find().populate('responsible', ' name _id email');
  }

  async findOne(id: number) {
    const activity = await this.activityModel.findById(id);
    return activity;
  }

  update(id: string, updateActivityDto: UpdateActivityDto) {
    return this.activityModel.findByIdAndUpdate(id, updateActivityDto, {
      new: true,
    });
  }
}
