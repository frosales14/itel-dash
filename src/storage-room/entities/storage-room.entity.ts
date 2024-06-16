import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Product } from 'src/product/entities/product.entity';

@Schema()
export class StorageRoom {
  _id?: string;
  @Prop({ required: true })
  name: string;
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }],
  })
  products: Product[];
}

export const StorageRoomSchema = SchemaFactory.createForClass(StorageRoom);
