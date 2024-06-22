import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { MapsService } from './maps.service';
import { CreateMapDto } from './dto/create-map.dto';
import { UpdateMapDto } from './dto/update-map.dto';

@Controller('maps')
export class MapsController {
  constructor(private readonly mapsService: MapsService) {}

  @Post()
  create(@Body() createMapDto: CreateMapDto) {
    return this.mapsService.create(createMapDto);
  }

  @Post('/create/anyone-home')
  createAnyoneHomeMap() {
    return this.mapsService.createAnyoneHomeMap();
  }

  @Post('/create/henry-shein')
  createHenrySheinMap() {
    return this.mapsService.createHenrySheinMap();
  }

  @Post('/create/goals')
  createGoals() {
    return this.mapsService.createGoalMap();
  }

  @Get('/anyone-home')
  getAnyoneHomeMap() {
    return this.mapsService.findByCampaign('Anyone Home');
  }

  @Get('/henry-shein')
  getHenrySheinMap() {
    return this.mapsService.findByCampaign('666dec7e28bc49b423ebc72b');
  }

  @Get()
  findAll() {
    return this.mapsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.mapsService.findByCampaign(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateMapDto: UpdateMapDto) {
    return this.mapsService.update(+id, updateMapDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.mapsService.remove(+id);
  }
}
