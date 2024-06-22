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
    console.log(createProyectDto);

    const newProyect = new this.proyectModel({ ...createProyectDto });
    console.log(newProyect);
    try {
      newProyect.save();
    } catch (error) {}
  }

  findAll() {
    return this.proyectModel.find().populate('user', ' name _id email');
  }

  findOne(id: number) {
    return `This action returns a #${id} proyect`;
  }

  update(id: number, updateProyectDto: UpdateProyectDto) {
    return `This action updates a #${id} proyect`;
  }

  remove(id: number) {
    return `This action removes a #${id} proyect`;
  }
}
