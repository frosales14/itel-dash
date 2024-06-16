import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';

@Schema()
export class Rol {
  _id?: string;
  @Prop({ required: true })
  name: string;
}

export const RolSchema = SchemaFactory.createForClass(Rol);
