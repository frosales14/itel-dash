import { Injectable } from '@nestjs/common';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';
import { Proyect } from './entities/proyect.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ProyectService {
  constructor(
    @InjectModel(Proyect.name)
    private proyectModel: Model<Proyect>,
  ) {}

  create(createProyectDto: CreateProyectDto) {
    const newProyect = new this.proyectModel({ ...createProyectDto });

    try {
      newProyect.save();
    } catch (error) {}
  }

  findAll() {
    return this.proyectModel.find().populate('user', ' name _id email');
  }

  findOne(id: string) {
    return this.proyectModel.findById(id).populate('user', ' name _id email');
  }

  async findActivitiesbyID(id: string) {
    const proectWithActivities = await this.proyectModel
      .findById(id)
      .populate('activities', '_id name description responsible status');

    return proectWithActivities.activities;
  }

  async update(id: string, updateProyectDto: UpdateProyectDto) {
    const updatedProyect = await this.proyectModel.findByIdAndUpdate(
      id,
      updateProyectDto,
      { new: true },
    );

    return updatedProyect;
  }
}
