import {
  BadRequestException,
  ConflictException,
  Injectable,
  Logger,
} from '@nestjs/common';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Station } from './entities/station.entity';
import mongoose, { Model } from 'mongoose';
import { Product } from 'src/product/entities/product.entity';

@Injectable()
export class StationService {
  private readonly logger = new Logger('StationService');

  constructor(
    @InjectModel(Station.name)
    private stationModel: Model<Station>,
    @InjectModel(Product.name)
    private productModel: Model<Product>,
  ) {}

  async createAnyoneHStations() {
    const stations = [];
    for (let index = 1; index < 106; index++) {
      let number = index < 10 ? '00' : index < 100 ? '0' : '';
      number += index;
      const newStation = {
        number: number,
        campaign: '666dec7228bc49b423ebc729',
        rol: 'agent',
        status: 'operate',
        periferals: false,
        internet: false,
        macAddress: 'not set',
        hostname: 'not set',
      };
      stations.push(newStation);
    }
    await this.stationModel.insertMany(stations);
    mongoose.connection.close();
  }

  async create(createStationDto: CreateStationDto) {
    try {
      const newStation = new this.stationModel({
        ...createStationDto,
      });
      await newStation.save();
    } catch (error) {
      this.logger.error(error);
      if (error.code === 11000) {
        throw new BadRequestException(
          `register already exist with number: ${createStationDto.number}`,
        );
      }
    }
  }

  async findAll() {
    let stations = [];
    stations = await this.stationModel.find().populate('campaign', '_id name');

    return stations;
  }

  findOne(id: string) {
    return this.stationModel.findById(id).populate('campaign', '_id name');
  }

  async update(id: string, updateStationDto: UpdateStationDto) {
    try {
      const updatedStation = await this.stationModel.findByIdAndUpdate(
        id,
        updateStationDto,
        {
          new: false,
        },
      );

      if (updateStationDto.monitor1) {
        await this.productModel.findByIdAndUpdate(updatedStation.monitor1, {
          inUse: false,
        });
        await this.productModel.findByIdAndUpdate(updateStationDto.monitor1, {
          inUse: true,
        });
      }

      if (updateStationDto.monitor2) {
        await this.productModel.findByIdAndUpdate(updatedStation.monitor2, {
          inUse: false,
        });
        await this.productModel.findByIdAndUpdate(updateStationDto.monitor2, {
          inUse: true,
        });
      }

      if (updateStationDto.battery) {
        await this.productModel.findByIdAndUpdate(updatedStation.battery, {
          inUse: false,
        });
        await this.productModel.findByIdAndUpdate(updateStationDto.battery, {
          inUse: true,
        });
      }

      if (updateStationDto.CPU) {
        await this.productModel.findByIdAndUpdate(updatedStation.CPU, {
          inUse: false,
        });
        await this.productModel.findByIdAndUpdate(updateStationDto.CPU, {
          inUse: true,
        });
      }

      return updatedStation;
    } catch (error) {
      if (error.code == 11000) {
        throw new ConflictException(
          `station with number ${updateStationDto.number} already exist`,
        );
      }
      throw new BadRequestException('Something went wrong during the update');
    }
  }
}
