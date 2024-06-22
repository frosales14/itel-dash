import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Employee {
  _id?: string;
  @Prop({ required: true })
  employee_id: string;
  @Prop({ required: true })
  name: string;
  @Prop({ unique: true, required: true })
  email: string;
  @Prop({ required: true })
  password?: string;
  @Prop({ default: true })
  isActive: boolean;
  @Prop({ type: [String], default: ['student'] })
  rol: string[];
  @Prop({ default: 0 })
  gender: string;
  @Prop({ required: true })
  contact_phone: string;
  @Prop({ required: false })
  birth_date: Date;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
