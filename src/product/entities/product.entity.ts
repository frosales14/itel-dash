import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Category } from 'src/category/entities/category.entity';

@Schema()
export class Product {
  _id?: string;
  @Prop({ required: true })
  name: string;

  @Prop()
  description: string;

  @Prop({ required: true })
  serialNumber: string;

  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Category.name }],
  })
  category: [Category];

  @Prop()
  inUse: boolean;
}

export const ProductSchema = SchemaFactory.createForClass(Product);
