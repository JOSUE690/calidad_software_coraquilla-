import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { MascotaService } from './mascota.service';
import { CreateMascotaDto } from './dto/create-mascota.dto';

describe('MascotaService', () => {
  let service: MascotaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MascotaService],
    }).compile();

    service = module.get<MascotaService>(MascotaService);
  });

  it('deberia estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('deberia crear una mascota con estado disponible por defecto', () => {
      const dto: CreateMascotaDto = {
        nombre: 'Firulais',
        especie: 'perro',
        raza: 'labrador',
        edad: 2,
      };

      const resultado = service.create(dto);

      expect(resultado).toEqual({
        id: 1,
        estado: 'disponible',
        ...dto,
      });
    });

    it('deberia asignar ids incrementales a cada mascota creada', () => {
      service.create({ nombre: 'A', especie: 'perro', raza: 'x', edad: 1 });
      const segunda = service.create({
        nombre: 'B',
        especie: 'gato',
        raza: 'y',
        edad: 3,
      });

      expect(segunda.id).toBe(2);
    });
  });

  describe('findAll', () => {
    it('deberia retornar un arreglo vacio si no hay mascotas', () => {
      expect(service.findAll()).toEqual([]);
    });

    it('deberia retornar todas las mascotas creadas', () => {
      service.create({ nombre: 'Firulais', especie: 'perro', raza: 'x', edad: 2 });
      service.create({ nombre: 'Michi', especie: 'gato', raza: 'y', edad: 1 });

      expect(service.findAll()).toHaveLength(2);
    });
  });

  describe('findOne', () => {
    it('deberia retornar la mascota si existe', () => {
      const creada = service.create({
        nombre: 'Firulais',
        especie: 'perro',
        raza: 'x',
        edad: 2,
      });

      expect(service.findOne(creada.id)).toEqual(creada);
    });

    it('deberia lanzar NotFoundException si el id no existe', () => {
      expect(() => service.findOne(999)).toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('deberia actualizar los campos de la mascota', () => {
      const creada = service.create({
        nombre: 'Firulais',
        especie: 'perro',
        raza: 'x',
        edad: 2,
      });

      const actualizada = service.update(creada.id, { edad: 3, estado: 'adoptado' });

      expect(actualizada.edad).toBe(3);
      expect(actualizada.estado).toBe('adoptado');
    });

    it('deberia lanzar NotFoundException al actualizar un id inexistente', () => {
      expect(() => service.update(999, { edad: 5 })).toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('deberia eliminar la mascota y confirmar la eliminacion', () => {
      const creada = service.create({
        nombre: 'Firulais',
        especie: 'perro',
        raza: 'x',
        edad: 2,
      });

      const resultado = service.remove(creada.id);

      expect(resultado).toEqual({ eliminado: true });
      expect(service.findAll()).toHaveLength(0);
    });

    it('deberia lanzar NotFoundException al eliminar un id inexistente', () => {
      expect(() => service.remove(999)).toThrow(NotFoundException);
    });
  });
});
