import { Injectable } from '@nestjs/common';
import { CreateStorageRoomDto } from './dto/create-storage-room.dto';
import { UpdateStorageRoomDto } from './dto/update-storage-room.dto';
import { InjectModel } from '@nestjs/mongoose';
import { StorageRoom } from './entities/storage-room.entity';
import { Model } from 'mongoose';

@Injectable()
export class StorageRoomService {
  constructor(
    @InjectModel(StorageRoom.name)
    private storeRoomModel: Model<StorageRoom>,
  ) {}
  create(createStorageRoomDto: CreateStorageRoomDto) {
    const newStorageRoom = new this.storeRoomModel({
      ...createStorageRoomDto,
    });

    try {
      newStorageRoom.save();
    } catch (error) {}
  }

  async findAll() {
    let storageRooms = [];
    storageRooms = await this.storeRoomModel.find();

    return storageRooms;
  }

  async findOne(id: string) {
    const storageRoom = await this.storeRoomModel.findById(id);
    return storageRoom;
  }

  async update(id: string, updateStorageRoomDto: UpdateStorageRoomDto) {
    return this.storeRoomModel.findByIdAndUpdate(id, updateStorageRoomDto, {
      new: true,
    });
  }

  remove(id: number) {
    return `This action removes a #${id} storageRoom`;
  }
}
