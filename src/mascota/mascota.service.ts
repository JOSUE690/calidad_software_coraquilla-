import { Injectable, NotFoundException } from '@nestjs/common';
import { Mascota } from './entities/mascota.entity';
import { CreateMascotaDto } from './dto/create-mascota.dto';
import { UpdateMascotaDto } from './dto/update-mascota.dto';

@Injectable()
export class MascotaService {
  private mascotas: Mascota[] = [];
  private nextId = 1;

  create(createMascotaDto: CreateMascotaDto): Mascota {
    const nuevaMascota: Mascota = {
      id: this.nextId++,
      estado: 'disponible',
      ...createMascotaDto,
    };
    this.mascotas.push(nuevaMascota);
    return nuevaMascota;
  }

  findAll(): Mascota[] {
    return this.mascotas;
  }

  findOne(id: number): Mascota {
    const mascota = this.mascotas.find((m) => m.id === id);
    if (!mascota) {
      throw new NotFoundException(`Mascota con id ${id} no encontrada`);
    }
    return mascota;
  }

  update(id: number, updateMascotaDto: UpdateMascotaDto): Mascota {
    const mascota = this.findOne(id);
    Object.assign(mascota, updateMascotaDto);
    return mascota;
  }

  remove(id: number): { eliminado: boolean } {
    const index = this.mascotas.findIndex((m) => m.id === id);
    if (index === -1) {
      throw new NotFoundException(`Mascota con id ${id} no encontrada`);
    }
    this.mascotas.splice(index, 1);
    return { eliminado: true };
  }
}
