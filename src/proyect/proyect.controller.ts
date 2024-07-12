import { Controller, Get, Post, Body, Patch, Param } from '@nestjs/common';
import { ProyectService } from './proyect.service';
import { CreateProyectDto } from './dto/create-proyect.dto';
import { UpdateProyectDto } from './dto/update-proyect.dto';

@Controller('proyect')
export class ProyectController {
  constructor(private readonly proyectService: ProyectService) {}

  @Post()
  create(@Body() createProyectDto: CreateProyectDto) {
    return this.proyectService.create(createProyectDto);
  }

  @Get()
  findAll() {
    return this.proyectService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.proyectService.findOne(id);
  }

  @Get('/activities/:id')
  findActivitiesByProyect(@Param('id') id: string) {
    return this.proyectService.findActivitiesbyID(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateProyectDto: UpdateProyectDto) {
    return this.proyectService.update(id, updateProyectDto);
  }
}
