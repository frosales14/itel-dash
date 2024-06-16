// Import Station schema

import { Station } from 'src/station/entities/station.entity';

export class CreateMapDto {
  campaign: string;
  column?: {
    stations: Station[];
    coordinates: string[];
  };

  racks?: RackDto[]; // Assuming a separate RackDto exists
}

export class RackDto {
  row1?: RowDto;
  row2?: RowDto;
}

export class RowDto {
  coordinates?: string[];
  stations?: Station[]; // Include Station as property
}
