import { Injectable, NotFoundException } from '@nestjs/common';
import { Adoptante } from './entities/adoptante.entity';
import { CreateAdoptanteDto } from './dto/create-adoptante.dto';
import { UpdateAdoptanteDto } from './dto/update-adoptante.dto';

@Injectable()
export class AdoptanteService {
  private adoptantes: Adoptante[] = [];
  private nextId = 1;

  create(createAdoptanteDto: CreateAdoptanteDto): Adoptante {
    const nuevoAdoptante: Adoptante = {
      id: this.nextId++,
      ...createAdoptanteDto,
    };
    this.adoptantes.push(nuevoAdoptante);
    return nuevoAdoptante;
  }

  findAll(): Adoptante[] {
    return this.adoptantes;
  }

  findOne(id: number): Adoptante {
    const adoptante = this.adoptantes.find((a) => a.id === id);
    if (!adoptante) {
      throw new NotFoundException(`Adoptante con id ${id} no encontrado`);
    }
    return adoptante;
  }

  update(id: number, updateAdoptanteDto: UpdateAdoptanteDto): Adoptante {
    const adoptante = this.findOne(id);
    Object.assign(adoptante, updateAdoptanteDto);
    return adoptante;
  }

  remove(id: number): { eliminado: boolean } {
    const index = this.adoptantes.findIndex((a) => a.id === id);
    if (index === -1) {
      throw new NotFoundException(`Adoptante con id ${id} no encontrado`);
    }
    this.adoptantes.splice(index, 1);
    return { eliminado: true };
  }
}
