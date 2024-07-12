import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Employee } from 'src/auth/entities/employee';
import { Activity } from '../../activities/entities/activity.entity';

@Schema()
export class Proyect {
  @Prop({ required: true })
  name: string;
  @Prop({ required: true })
  description: string;
  @Prop({ type: mongoose.Schema.ObjectId, ref: Employee.name })
  user: Employee;
  @Prop()
  status: string;
  @Prop([{ type: mongoose.Schema.ObjectId, ref: Activity.name }])
  activities: Activity;
}

export const ProyectSchema = SchemaFactory.createForClass(Proyect);
