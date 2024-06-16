import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Campaign } from 'src/campaign/entities/campaign.entity';
import { Station } from 'src/station/entities/station.entity';

@Schema()
export class Row {
  @Prop()
  coordinates: string[];
  @Prop({
    required: false,
    type: [{ type: mongoose.Schema.Types.ObjectId, ref: Station.name }],
  })
  stations: Station[];
}

@Schema()
export class Rack {
  @Prop({ type: Row })
  row1: Row;

  @Prop({ type: Row })
  row2: Row;
}

@Schema()
export class Column {
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: Station.name }] })
  stations: Station[];
  @Prop()
  coordinates: string[];
}

@Schema()
export class Map extends Document {
  @Prop()
  campaign: string;

  @Prop({ type: Column })
  column: Column;

  @Prop({ type: [Rack] })
  racks: Rack[];
}

export const MapSchema = SchemaFactory.createForClass(Map);
