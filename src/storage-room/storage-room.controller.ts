import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { StorageRoomService } from './storage-room.service';
import { CreateStorageRoomDto } from './dto/create-storage-room.dto';
import { UpdateStorageRoomDto } from './dto/update-storage-room.dto';

@Controller('storage-room')
export class StorageRoomController {
  constructor(private readonly storageRoomService: StorageRoomService) {}

  @Post()
  create(@Body() createStorageRoomDto: CreateStorageRoomDto) {
    return this.storageRoomService.create(createStorageRoomDto);
  }

  @Get()
  findAll() {
    return this.storageRoomService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.storageRoomService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateStorageRoomDto: UpdateStorageRoomDto,
  ) {
    return this.storageRoomService.update(id, updateStorageRoomDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.storageRoomService.remove(+id);
  }
}
