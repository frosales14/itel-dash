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

    console.log(campaignDb);

    const columnCordinates = [];

    for (let index = 1; index <= 16; index++) {
      columnCordinates.push(`G${index}`);
    }

    const dbColumnStations = await this.stationModel.find({
      number: {
        $gte: (90).toString().padStart(3, '0'),
        $lte: (105).toString(),
      },
    });

    const columnStations = dbColumnStations.map((data) => data.id);

    // rack 1 begins
    const dbRack1Row1 = await this.stationModel.find({
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
      number: {
        $gte: (17).toString().padStart(3, '0'),
        $lte: (23).toString().padStart(3, '0'),
      },
    });

    const rack2Row1 = dbRack2Row1.reverse().map((data) => data.id);
    // rack2Row1.push({
    //   number: '',
    //   rol: '',
    //   _id: ObjectId(),
    //   status: '',
    // });

    const Rack2Row1Cordinates = [];
    for (let index = 23; index >= 17; index--) {
      Rack2Row1Cordinates.push(`B${index}`);
    }

    Rack2Row1Cordinates.push('');

    const dbRack2Row2 = await this.stationModel.find({
      number: {
        $gte: (24).toString().padStart(3, '0'),
        $lte: (29).toString().padStart(3, '0'),
      },
    });

    const rack2Row2 = dbRack2Row2.reverse().map((data) => data.id);

    // rack2Row2.push({
    //   number: '000',
    //   rol: '',
    //   status: '',
    //   _id: '',
    // });

    // rack2Row2.unshift({
    //   number: '000',
    //   rol: '',
    //   status: '',
    //   _id: '',
    // });

    const Rack2Row2Cordinates = [];
    for (let index = 13; index >= 8; index--) {
      Rack2Row2Cordinates.push(`B${index}`);
    }

    Rack2Row2Cordinates.unshift('');
    Rack2Row2Cordinates.push('');

    // start rack 3
    const dbRack3Row1 = await this.stationModel.find({
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
      number: {
        $gte: (70).toString().padStart(3, '0'),
        $lte: (75).toString().padStart(3, '0'),
      },
    });

    const rack5Row2 = dbRack5Row2.reverse().map((data) => data.id);

    // rack5Row2.unshift({
    //   number: '000',
    //   rol: '',
    //   status: '',
    //   _id: '',
    // });

    // rack5Row2.unshift({
    //   number: '000',
    //   rol: '',
    //   status: '',
    //   _id: '',
    // });

    const Rack5Row2Cordinates = [];
    for (let index = 14; index >= 9; index--) {
      Rack5Row2Cordinates.push(`D${index}`);
    }

    Rack5Row2Cordinates.unshift('');
    Rack5Row2Cordinates.unshift('');

    // start rack 6
    const dbRack6Row1 = await this.stationModel.find({
      number: {
        $gte: (76).toString().padStart(3, '0'),
        $lte: (81).toString().padStart(3, '0'),
      },
    });

    const rack6Row1 = dbRack6Row1.reverse().map((data) => data.id);

    // rack6Row1.unshift({
    //   number: '000',
    //   rol: '',
    //   status: '',
    //   _id: '',
    // });

    // rack6Row1.push({
    //   number: '000',
    //   rol: '',
    //   status: '',
    //   _id: '',
    // });

    const Rack6Row1Cordinates = [];
    for (let index = 6; index >= 1; index--) {
      Rack6Row1Cordinates.push(`F${index}`);
    }

    Rack6Row1Cordinates.unshift('');
    Rack6Row1Cordinates.push('');

    const dbRack6Row2 = await this.stationModel.find({
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
      campaign: campaignDb.name,
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
