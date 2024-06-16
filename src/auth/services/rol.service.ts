import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Rol } from '../entities/rol';
import { Model } from 'mongoose';
import { CreateRolDto } from '../dto/create-rol.dto';
import { UpdateRolDto } from '../dto/update-rol.dto';

@Injectable()
export class RolService {
  constructor(
    @InjectModel(Rol.name)
    private rolModel: Model<Rol>,
  ) {}

  async create(rol: CreateRolDto) {
    const newRol = new this.rolModel({
      ...rol,
    });

    try {
      newRol.save();
    } catch (error) {}
  }

  async findAll() {
    let rolList = [];
    rolList = await this.rolModel.find();

    return rolList;
  }

  findOne(id: string) {
    return this.rolModel.findById(id);
  }

  update(id: number, updateRol: UpdateRolDto) {
    const rol = this.rolModel.findById(id);
    const newRol = {
      ...rol,
      ...updateRol,
    };

    return this.rolModel.findByIdAndUpdate(id, newRol, {
      new: true,
    });
  }
}
