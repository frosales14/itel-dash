import { Body, Controller, Get, Param, Patch, Post } from '@nestjs/common';
import { RolService } from '../services/rol.service';
import { CreateRolDto } from '../dto/create-rol.dto';
import { UpdateRolDto } from '../dto/update-rol.dto';

@Controller('rol')
export class RolController {
  constructor(private readonly rolService: RolService) {}

  @Post()
  create(@Body() createRol: CreateRolDto) {
    return this.rolService.create(createRol);
  }

  @Get()
  findAll() {
    return this.rolService.findAll();
  }

  @Get(':id')
  findById(@Param('id') id: string) {
    return this.rolService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id, @Body() rol: UpdateRolDto) {
    return this.rolService.update(id, rol);
  }
}
