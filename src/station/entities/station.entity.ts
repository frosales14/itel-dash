import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Employee } from 'src/auth/entities/employee';
import { Campaign } from 'src/campaign/entities/campaign.entity';
import { Product } from 'src/product/entities/product.entity';

@Schema()
export class Station {
  _id?: string;
  @Prop({ required: true, unique: true })
  number: string;
  @Prop({
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Campaign.name }],
  })
  campaign: Campaign;
  @Prop({ required: true })
  rol: string;
  @Prop({ required: true })
  status: string;
  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }],
  })
  monitor1: Product;
  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }],
  })
  monitor2: Product;
  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }],
  })
  CPU: Product;
  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Product.name }],
  })
  battery: Product;
  @Prop({ required: false })
  periferals: boolean;
  @Prop({ required: false })
  internet: boolean;
  @Prop({ required: false })
  macAddress: string;
  @Prop({ required: false })
  hostname: string;
  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Employee.name }],
  })
  lastCheckBy: Employee;
}

export const StationSchema = SchemaFactory.createForClass(Station);
