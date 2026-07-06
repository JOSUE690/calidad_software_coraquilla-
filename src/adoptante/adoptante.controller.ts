import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
} from '@nestjs/common';
import { AdoptanteService } from './adoptante.service';
import { CreateAdoptanteDto } from './dto/create-adoptante.dto';
import { UpdateAdoptanteDto } from './dto/update-adoptante.dto';

@Controller('adoptantes')
export class AdoptanteController {
  constructor(private readonly adoptanteService: AdoptanteService) {}

  @Post()
  create(@Body() createAdoptanteDto: CreateAdoptanteDto) {
    return this.adoptanteService.create(createAdoptanteDto);
  }

  @Get()
  findAll() {
    return this.adoptanteService.findAll();
  }

  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.adoptanteService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateAdoptanteDto: UpdateAdoptanteDto,
  ) {
    return this.adoptanteService.update(id, updateAdoptanteDto);
  }

  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.adoptanteService.remove(id);
  }
}
