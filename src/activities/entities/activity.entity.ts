import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Employee } from 'src/auth/entities/employee';

@Schema()
export class Activity {
  @Prop()
  name: string;

  @Prop()
  description: string;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Employee.name })
  responsible: Employee;

  @Prop({ type: mongoose.Schema.ObjectId, ref: Employee.name })
  updateBy: Employee;

  @Prop()
  status: 'done' | 'pending' | 'in progress';
}

export const ActivitiesSchema = SchemaFactory.createForClass(Activity);
