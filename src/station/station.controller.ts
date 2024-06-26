import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { StationService } from './station.service';
import { CreateStationDto } from './dto/create-station.dto';
import { UpdateStationDto } from './dto/update-station.dto';

@Controller('station')
export class StationController {
  constructor(private readonly stationService: StationService) {}

  @Post()
  create(@Body() createStationDto: CreateStationDto) {
    return this.stationService.create(createStationDto);
  }

  @Get()
  findAll() {
    return this.stationService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.stationService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateStationDto: UpdateStationDto) {
    return this.stationService.update(id, updateStationDto);
  }

  @Post('/anyone-home-seed')
  createAnyoneHome() {
    return this.stationService.createAnyoneHStations();
  }

  @Post('/henry-shein-seed')
  createHenryShein() {
    return this.stationService.createHenrySchein();
  }

  @Post('/goal-seed')
  createGoal() {
    return this.stationService.createGoalsStations();
  }
}
