import { Module } from '@nestjs/common';
import { StorageRoomService } from './storage-room.service';
import { StorageRoomController } from './storage-room.controller';
import { StorageRoom, StorageRoomSchema } from './entities/storage-room.entity';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from 'src/product/entities/product.entity';

@Module({
  controllers: [StorageRoomController],
  providers: [StorageRoomService],
  imports: [
    MongooseModule.forFeature([
      {
        name: StorageRoom.name,
        schema: StorageRoomSchema,
      },
    ]),
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      },
    ]),
  ],
})
export class StorageRoomModule {}
