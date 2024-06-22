import { Injectable } from '@nestjs/common';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Map } from './entities/map.entity';
import { Station } from 'src/station/entities/station.entity';
import { Campaign } from 'src/campaign/entities/campaign.entity';

@Injectable()
export class MapsService {
  constructor(
    @InjectModel(Map.name)
    private mapModel: Model<Map>,
    @InjectModel(Station.name)
    private stationModel: Model<Station>,
    @InjectModel(Campaign.name)
    private campaignModel: Model<Campaign>,
  ) {}

  create(createMap: CreateMapDto) {
    const newMap = new this.mapModel({
      ...createMap,
    });

    try {
      newMap.save();
    } catch (error) {}
  }

  async createAnyoneHomeMap() {
    const campaignDb = await this.campaignModel.findOne({
      name: 'Anyone Home',
    });

    const columnCordinates = [];

    for (let index = 1; index <= 16; index++) {
      columnCordinates.push(`G${index}`);
    }

    const dbColumnStations = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (90).toString().padStart(3, '0'),
        $lte: (105).toString(),
      },
    });

    const columnStations = dbColumnStations.map((data) => data.id);

    // rack 1 begins
    const dbRack1Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (1).toString().padStart(3, '0'),
        $lte: (8).toString().padStart(3, '0'),
      },
    });

    const rack1Row1 = dbRack1Row1.reverse().map((data) => data.id);

    const Rack1Row1Cordinates = [];
    for (let index = 8; index >= 1; index--) {
      Rack1Row1Cordinates.push(`A${index}`);
    }

    const dbRack1Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (9).toString().padStart(3, '0'),
        $lte: (16).toString().padStart(3, '0'),
      },
    });

    const rack1Row2 = dbRack1Row2.reverse().map((data) => data.id);

    const Rack1Row2Cordinates = [];
    for (let index = 16; index >= 9; index--) {
      Rack1Row2Cordinates.push(`A${index}`);
    }

    // rack2
    const dbRack2Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (17).toString().padStart(3, '0'),
        $lte: (23).toString().padStart(3, '0'),
      },
    });

    const rack2Row1 = dbRack2Row1.reverse().map((data) => data.id);

    const Rack2Row1Cordinates = [];
    for (let index = 23; index >= 17; index--) {
      Rack2Row1Cordinates.push(`B${index}`);
    }

    Rack2Row1Cordinates.push('');

    const dbRack2Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (24).toString().padStart(3, '0'),
        $lte: (29).toString().padStart(3, '0'),
      },
    });

    const rack2Row2 = dbRack2Row2.reverse().map((data) => data.id);

    const Rack2Row2Cordinates = [];
    for (let index = 13; index >= 8; index--) {
      Rack2Row2Cordinates.push(`B${index}`);
    }

    Rack2Row2Cordinates.unshift('');
    Rack2Row2Cordinates.push('');

    // start rack 3
    const dbRack3Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (30).toString().padStart(3, '0'),
        $lte: (37).toString().padStart(3, '0'),
      },
    });

    const rack3Row1 = dbRack3Row1.reverse().map((data) => data.id);

    const Rack3Row1Cordinates = [];
    for (let index = 8; index >= 1; index--) {
      Rack3Row1Cordinates.push(`C${index}`);
    }
    const dbRack3Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (38).toString().padStart(3, '0'),
        $lte: (45).toString().padStart(3, '0'),
      },
    });

    const rack3Row2 = dbRack3Row2.reverse().map((data) => data.id);

    const Rack3Row2Cordinates = [];
    for (let index = 16; index >= 9; index--) {
      Rack3Row2Cordinates.push(`B${index}`);
    }

    // start rack 4

    const dbRack4Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (46).toString().padStart(3, '0'),
        $lte: (53).toString().padStart(3, '0'),
      },
    });

    const rack4Row1 = dbRack4Row1.reverse().map((data) => data.id);

    const Rack4Row1Cordinates = [];
    for (let index = 8; index >= 1; index--) {
      Rack4Row1Cordinates.push(`D${index}`);
    }
    const dbRack4Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (54).toString().padStart(3, '0'),
        $lte: (61).toString().padStart(3, '0'),
      },
    });

    const rack4Row2 = dbRack4Row2.reverse().map((data) => data.id);

    const Rack4Row2Cordinates = [];
    for (let index = 16; index >= 9; index--) {
      Rack4Row2Cordinates.push(`D${index}`);
    }

    // start rack 5

    const dbRack5Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (62).toString().padStart(3, '0'),
        $lte: (69).toString().padStart(3, '0'),
      },
    });

    const rack5Row1 = dbRack5Row1.reverse().map((data) => data.id);

    const Rack5Row1Cordinates = [];
    for (let index = 8; index >= 1; index--) {
      Rack5Row1Cordinates.push(`E${index}`);
    }
    const dbRack5Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (70).toString().padStart(3, '0'),
        $lte: (75).toString().padStart(3, '0'),
      },
    });

    const rack5Row2 = dbRack5Row2.reverse().map((data) => data.id);

    const Rack5Row2Cordinates = [];
    for (let index = 14; index >= 9; index--) {
      Rack5Row2Cordinates.push(`D${index}`);
    }

    Rack5Row2Cordinates.unshift('');
    Rack5Row2Cordinates.unshift('');

    // start rack 6
    const dbRack6Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (76).toString().padStart(3, '0'),
        $lte: (81).toString().padStart(3, '0'),
      },
    });

    const rack6Row1 = dbRack6Row1.reverse().map((data) => data.id);

    const Rack6Row1Cordinates = [];
    for (let index = 6; index >= 1; index--) {
      Rack6Row1Cordinates.push(`F${index}`);
    }

    Rack6Row1Cordinates.unshift('');
    Rack6Row1Cordinates.push('');

    const dbRack6Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (82).toString().padStart(3, '0'),
        $lte: (89).toString().padStart(3, '0'),
      },
    });

    const rack6Row2 = dbRack6Row2.reverse().map((data) => data.id);

    const Rack6Row2Cordinates = [];
    for (let index = 14; index >= 7; index--) {
      Rack6Row2Cordinates.push(`F${index}`);
    }

    const map: CreateMapDto = {
      campaign: campaignDb._id,
      column: {
        coordinates: columnCordinates,
        stations: columnStations,
      },
      racks: [
        {
          row1: {
            stations: rack1Row1,
            coordinates: Rack1Row1Cordinates,
          },
          row2: {
            stations: rack1Row2,
            coordinates: Rack1Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack2Row1,
            coordinates: Rack2Row1Cordinates,
          },
          row2: {
            stations: rack2Row2,
            coordinates: Rack2Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack3Row1,
            coordinates: Rack3Row1Cordinates,
          },
          row2: {
            stations: rack3Row2,
            coordinates: Rack3Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack4Row1,
            coordinates: Rack4Row1Cordinates,
          },
          row2: {
            stations: rack4Row2,
            coordinates: Rack4Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack5Row1,
            coordinates: Rack5Row1Cordinates,
          },
          row2: {
            stations: rack5Row2,
            coordinates: Rack5Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack6Row1,
            coordinates: Rack6Row1Cordinates,
          },
          row2: {
            stations: rack6Row2,
            coordinates: Rack6Row2Cordinates,
          },
        },
      ],
    };

    const newMap = new this.mapModel(map);
    newMap.save();
  }

  async createHenrySheinMap() {
    const campaignDb = await this.campaignModel.findOne({
      name: 'Henry Schein One',
    });

    const columnCordinates = [];

    for (let index = 7; index >= 1; index--) {
      columnCordinates.push(`A${index}`);
    }

    const dbColumnStations = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (1).toString().padStart(3, '0'),
        $lte: (7).toString().padStart(3, '0'),
      },
    });

    const columnStations = dbColumnStations.reverse().map((data) => data.id);

    // rack 1
    const dbRack1Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (8).toString().padStart(3, '0'),
        $lte: (13).toString().padStart(3, '0'),
      },
    });

    const rack1Row1 = dbRack1Row1.reverse().map((data) => data.id);

    const Rack1Row1Cordinates = [];
    for (let index = 6; index >= 1; index--) {
      Rack1Row1Cordinates.push(`B${index}`);
    }

    const dbRack1Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (14).toString().padStart(3, '0'),
        $lte: (19).toString().padStart(3, '0'),
      },
    });

    const rack1Row2 = dbRack1Row2.reverse().map((data) => data.id);

    const Rack1Row2Cordinates = [];
    for (let index = 12; index >= 7; index--) {
      Rack1Row2Cordinates.push(`B${index}`);
    }

    // rack 2
    const dbRack2Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (20).toString().padStart(3, '0'),
        $lte: (27).toString().padStart(3, '0'),
      },
    });

    const rack2Row1 = dbRack2Row1.reverse().map((data) => data.id);

    const Rack2Row1Cordinates = [];
    for (let index = 8; index >= 1; index--) {
      Rack2Row1Cordinates.push(`C${index}`);
    }

    const dbRack2Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (28).toString().padStart(3, '0'),
        $lte: (34).toString().padStart(3, '0'),
      },
    });

    const rack2Row2 = dbRack2Row2.reverse().map((data) => data.id);

    const Rack2Row2Cordinates = [];
    for (let index = 15; index >= 9; index--) {
      Rack2Row2Cordinates.push(`C${index}`);
    }

    // rack 3
    const dbRack3Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (35).toString().padStart(3, '0'),
        $lte: (42).toString().padStart(3, '0'),
      },
    });

    const rack3Row1 = dbRack3Row1.reverse().map((data) => data.id);

    const Rack3Row1Cordinates = [];
    for (let index = 8; index >= 1; index--) {
      Rack3Row1Cordinates.push(`D${index}`);
    }

    const dbRack3Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (43).toString().padStart(3, '0'),
        $lte: (49).toString().padStart(3, '0'),
      },
    });

    const rack3Row2 = dbRack3Row2.reverse().map((data) => data.id);

    const Rack3Row2Cordinates = [];
    for (let index = 15; index >= 9; index--) {
      Rack3Row2Cordinates.push(`D${index}`);
    }

    // rack 4
    const dbRack4Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (50).toString().padStart(3, '0'),
        $lte: (55).toString().padStart(3, '0'),
      },
    });

    const rack4Row1 = dbRack4Row1.reverse().map((data) => data.id);

    const Rack4Row1Cordinates = [];
    for (let index = 6; index >= 1; index--) {
      Rack4Row1Cordinates.push(`E${index}`);
    }

    const dbRack4Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (56).toString().padStart(3, '0'),
        $lte: (61).toString().padStart(3, '0'),
      },
    });

    const rack4Row2 = dbRack4Row2.reverse().map((data) => data.id);

    const Rack4Row2Cordinates = [];
    for (let index = 12; index >= 7; index--) {
      Rack4Row2Cordinates.push(`E${index}`);
    }

    // rack 5
    const dbRack5Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (62).toString().padStart(3, '0'),
        $lte: (69).toString().padStart(3, '0'),
      },
    });

    const rack5Row1 = dbRack5Row1.reverse().map((data) => data.id);

    const Rack5Row1Cordinates = [];
    for (let index = 8; index >= 1; index--) {
      Rack5Row1Cordinates.push(`F${index}`);
    }

    const dbRack5Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (70).toString().padStart(3, '0'),
        $lte: (76).toString().padStart(3, '0'),
      },
    });

    const rack5Row2 = dbRack5Row2.reverse().map((data) => data.id);

    const Rack5Row2Cordinates = [];
    for (let index = 15; index >= 9; index--) {
      Rack5Row2Cordinates.push(`F${index}`);
    }

    // rack 6
    const dbRack6Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (77).toString().padStart(3, '0'),
        $lte: (84).toString().padStart(3, '0'),
      },
    });

    const rack6Row1 = dbRack6Row1.reverse().map((data) => data.id);

    const Rack6Row1Cordinates = [];
    for (let index = 8; index >= 1; index--) {
      Rack6Row1Cordinates.push(`G${index}`);
    }

    const dbRack6Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (85).toString().padStart(3, '0'),
        $lte: (91).toString().padStart(3, '0'),
      },
    });

    const rack6Row2 = dbRack6Row2.reverse().map((data) => data.id);

    const Rack6Row2Cordinates = [];
    for (let index = 15; index >= 9; index--) {
      Rack6Row2Cordinates.push(`G${index}`);
    }

    // rack 7
    const dbRack7Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (92).toString().padStart(3, '0'),
        $lte: (98).toString().padStart(3, '0'),
      },
    });

    const rack7Row1 = dbRack7Row1.reverse().map((data) => data.id);

    const Rack7Row1Cordinates = [];
    for (let index = 7; index >= 1; index--) {
      Rack7Row1Cordinates.push(`H${index}`);
    }

    const dbRack7Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (99).toString().padStart(3, '0'),
        $lte: (104).toString().padStart(3, '0'),
      },
    });

    const rack7Row2 = dbRack7Row2.reverse().map((data) => data.id);

    const Rack7Row2Cordinates = [];
    for (let index = 13; index >= 8; index--) {
      Rack7Row2Cordinates.push(`H${index}`);
    }

    // rack 8
    const dbRack8Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (105).toString(),
        $lte: (110).toString(),
      },
    });

    const rack8Row1 = dbRack8Row1.reverse().map((data) => data.id);

    const Rack8Row1Cordinates = [];
    for (let index = 6; index >= 1; index--) {
      Rack8Row1Cordinates.push(`I${index}`);
    }

    const dbRack8Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (111).toString(),
        $lte: (117).toString(),
      },
    });

    const rack8Row2 = dbRack8Row2.reverse().map((data) => data.id);

    const Rack8Row2Cordinates = [];
    for (let index = 13; index >= 7; index--) {
      Rack8Row2Cordinates.push(`I${index}`);
    }

    const map: CreateMapDto = {
      campaign: campaignDb._id,
      column: {
        coordinates: columnCordinates,
        stations: columnStations,
      },
      racks: [
        {
          row1: {
            stations: rack1Row1,
            coordinates: Rack1Row1Cordinates,
          },
          row2: {
            stations: rack1Row2,
            coordinates: Rack1Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack2Row1,
            coordinates: Rack2Row1Cordinates,
          },
          row2: {
            stations: rack2Row2,
            coordinates: Rack2Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack3Row1,
            coordinates: Rack3Row1Cordinates,
          },
          row2: {
            stations: rack3Row2,
            coordinates: Rack3Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack4Row1,
            coordinates: Rack4Row1Cordinates,
          },
          row2: {
            stations: rack4Row2,
            coordinates: Rack4Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack5Row1,
            coordinates: Rack5Row1Cordinates,
          },
          row2: {
            stations: rack5Row2,
            coordinates: Rack5Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack6Row1,
            coordinates: Rack6Row1Cordinates,
          },
          row2: {
            stations: rack6Row2,
            coordinates: Rack6Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack7Row1,
            coordinates: Rack7Row1Cordinates,
          },
          row2: {
            stations: rack7Row2,
            coordinates: Rack7Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack8Row1,
            coordinates: Rack8Row1Cordinates,
          },
          row2: {
            stations: rack8Row2,
            coordinates: Rack8Row2Cordinates,
          },
        },
      ],
    };

    const newMap = new this.mapModel(map);
    newMap.save();
  }

  async createGoalMap() {
    const campaignDb = await this.campaignModel.findOne({
      name: 'Goals',
    });

    const columnCordinates = [];

    for (let index = 5; index >= 1; index--) {
      columnCordinates.push(`A${index}`);
    }

    const dbColumnStations = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (1).toString().padStart(3, '0'),
        $lte: (5).toString().padStart(3, '0'),
      },
    });

    const columnStations = dbColumnStations.reverse().map((data) => data.id);

    // rack 1
    const dbRack1Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (6).toString().padStart(3, '0'),
        $lte: (10).toString().padStart(3, '0'),
      },
    });

    const rack1Row1 = dbRack1Row1.reverse().map((data) => data.id);

    const Rack1Row1Cordinates = [];
    for (let index = 10; index >= 6; index--) {
      Rack1Row1Cordinates.push(`A${index}`);
    }

    const dbRack1Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (11).toString().padStart(3, '0'),
        $lte: (15).toString().padStart(3, '0'),
      },
    });

    const rack1Row2 = dbRack1Row2.reverse().map((data) => data.id);

    const Rack1Row2Cordinates = [];
    for (let index = 15; index >= 11; index--) {
      Rack1Row2Cordinates.push(`A${index}`);
    }

    // rack 2
    const dbRack2Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (16).toString().padStart(3, '0'),
        $lte: (18).toString().padStart(3, '0'),
      },
    });

    const rack2Row1 = dbRack2Row1.reverse().map((data) => data.id);

    const Rack2Row1Cordinates = [];
    for (let index = 18; index >= 16; index--) {
      Rack2Row1Cordinates.push(`A${index}`);
    }

    const dbRack2Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (19).toString().padStart(3, '0'),
        $lte: (21).toString().padStart(3, '0'),
      },
    });

    const rack2Row2 = dbRack2Row2.reverse().map((data) => data.id);

    const Rack2Row2Cordinates = [];
    for (let index = 21; index >= 19; index--) {
      Rack2Row2Cordinates.push(`A${index}`);
    }

    // rack 3
    const dbRack3Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (22).toString().padStart(3, '0'),
        $lte: (27).toString().padStart(3, '0'),
      },
    });

    const rack3Row1 = dbRack3Row1.reverse().map((data) => data.id);

    const Rack3Row1Cordinates = [];
    for (let index = 6; index >= 1; index--) {
      Rack3Row1Cordinates.push(`B${index}`);
    }

    const dbRack3Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (28).toString().padStart(3, '0'),
        $lte: (33).toString().padStart(3, '0'),
      },
    });

    const rack3Row2 = dbRack3Row2.reverse().map((data) => data.id);

    const Rack3Row2Cordinates = [];
    for (let index = 12; index >= 7; index--) {
      Rack3Row2Cordinates.push(`A${index}`);
    }

    // rack 4
    const dbRack4Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (34).toString().padStart(3, '0'),
        $lte: (39).toString().padStart(3, '0'),
      },
    });

    const rack4Row1 = dbRack4Row1.reverse().map((data) => data.id);

    const Rack4Row1Cordinates = [];
    for (let index = 18; index >= 13; index--) {
      Rack4Row1Cordinates.push(`B${index}`);
    }

    const dbRack4Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (40).toString().padStart(3, '0'),
        $lte: (45).toString().padStart(3, '0'),
      },
    });

    const rack4Row2 = dbRack4Row2.reverse().map((data) => data.id);

    const Rack4Row2Cordinates = [];
    for (let index = 24; index >= 19; index--) {
      Rack4Row2Cordinates.push(`B${index}`);
    }

    // rack 5
    const dbRack5Row1 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (51).toString().padStart(3, '0'),
        $lte: (46).toString().padStart(3, '0'),
      },
    });

    const rack5Row1 = dbRack5Row1.reverse().map((data) => data.id);

    const Rack5Row1Cordinates = [];
    for (let index = 30; index >= 25; index--) {
      Rack5Row1Cordinates.push(`B${index}`);
    }

    const dbRack5Row2 = await this.stationModel.find({
      campaign: campaignDb._id,
      number: {
        $gte: (57).toString().padStart(3, '0'),
        $lte: (52).toString().padStart(3, '0'),
      },
    });

    const rack5Row2 = dbRack5Row2.reverse().map((data) => data.id);

    const Rack5Row2Cordinates = [];
    for (let index = 36; index >= 31; index--) {
      Rack5Row2Cordinates.push(`B${index}`);
    }

    const map: CreateMapDto = {
      campaign: campaignDb._id,
      column: {
        coordinates: columnCordinates,
        stations: columnStations,
      },
      racks: [
        {
          row1: {
            stations: rack1Row1,
            coordinates: Rack1Row1Cordinates,
          },
          row2: {
            stations: rack1Row2,
            coordinates: Rack1Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack2Row1,
            coordinates: Rack2Row1Cordinates,
          },
          row2: {
            stations: rack2Row2,
            coordinates: Rack2Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack3Row1,
            coordinates: Rack3Row1Cordinates,
          },
          row2: {
            stations: rack3Row2,
            coordinates: Rack3Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack4Row1,
            coordinates: Rack4Row1Cordinates,
          },
          row2: {
            stations: rack4Row2,
            coordinates: Rack4Row2Cordinates,
          },
        },
        {
          row1: {
            stations: rack5Row1,
            coordinates: Rack5Row1Cordinates,
          },
          row2: {
            stations: rack5Row2,
            coordinates: Rack5Row2Cordinates,
          },
        },
      ],
    };

    const newMap = new this.mapModel(map);
    newMap.save();
  }

  findAll() {
    return this.mapModel
      .find()
      .populate({
        path: 'column.stations',
        select: {
          _id: true,
          number: true,
          rol: true,
          status: true,
        },
      })
      .populate({
        path: 'racks.row1.stations racks.row2.stations',
        select: {
          _id: true,
          number: true,
          rol: true,
          status: true,
        },
      });
  }

  findOne(id: number) {
    return `This action returns a #${id} map`;
  }

  findByCampaign(campaign: string) {
    return this.mapModel
      .findOne({ campaign: campaign })
      .populate({
        path: 'column.stations',
        select: {
          _id: true,
          number: true,
          rol: true,
          status: true,
        },
      })
      .populate({
        path: 'racks.row1.stations racks.row2.stations',
        select: {
          _id: true,
          number: true,
          rol: true,
          status: true,
        },
      });
  }

  update(id: number, updateMapDto: UpdateMapDto) {
    return `This action updates a #${id} map`;
  }

  remove(id: number) {
    return `This action removes a #${id} map`;
  }

  getCoordinatesArray(letter: string, from: number, to: number): string[] {
    const coordinates = [];

    for (let index = from; index < to; index++) {
      coordinates.push(`${letter}${index}`);
    }
    return;
  }
}
