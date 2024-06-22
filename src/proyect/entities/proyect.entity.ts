import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Employee } from 'src/auth/entities/employee';

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
}

export const ProyectSchema = SchemaFactory.createForClass(Proyect);
