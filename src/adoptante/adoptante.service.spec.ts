import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException } from '@nestjs/common';
import { AdoptanteService } from './adoptante.service';
import { CreateAdoptanteDto } from './dto/create-adoptante.dto';

describe('AdoptanteService', () => {
  let service: AdoptanteService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AdoptanteService],
    }).compile();

    service = module.get<AdoptanteService>(AdoptanteService);
  });

  it('deberia estar definido', () => {
    expect(service).toBeDefined();
  });

  describe('create', () => {
    it('deberia crear un adoptante correctamente', () => {
      const dto: CreateAdoptanteDto = {
        nombre: 'Juan Perez',
        cedula: '1712345678',
        telefono: '0999999999',
        direccion: 'Quito',
      };

      const resultado = service.create(dto);

      expect(resultado).toEqual({ id: 1, ...dto });
    });

    it('deberia asignar ids incrementales', () => {
      service.create({
        nombre: 'A',
        cedula: '1',
        telefono: '1',
        direccion: 'x',
      });
      const segundo = service.create({
        nombre: 'B',
        cedula: '2',
        telefono: '2',
        direccion: 'y',
      });

      expect(segundo.id).toBe(2);
    });
  });

  describe('findAll', () => {
    it('deberia retornar arreglo vacio si no hay adoptantes', () => {
      expect(service.findAll()).toEqual([]);
    });

    it('deberia retornar todos los adoptantes creados', () => {
      service.create({ nombre: 'A', cedula: '1', telefono: '1', direccion: 'x' });
      service.create({ nombre: 'B', cedula: '2', telefono: '2', direccion: 'y' });

      expect(service.findAll()).toHaveLength(2);
    });
  });

  describe('findOne', () => {
    it('deberia retornar el adoptante si existe', () => {
      const creado = service.create({
        nombre: 'Juan',
        cedula: '1',
        telefono: '1',
        direccion: 'x',
      });

      expect(service.findOne(creado.id)).toEqual(creado);
    });

    it('deberia lanzar NotFoundException si no existe', () => {
      expect(() => service.findOne(999)).toThrow(NotFoundException);
    });
  });

  describe('update', () => {
    it('deberia actualizar los datos del adoptante', () => {
      const creado = service.create({
        nombre: 'Juan',
        cedula: '1',
        telefono: '1',
        direccion: 'x',
      });

      const actualizado = service.update(creado.id, { mascotaAdoptadaId: 5 });

      expect(actualizado.mascotaAdoptadaId).toBe(5);
    });

    it('deberia lanzar NotFoundException al actualizar id inexistente', () => {
      expect(() => service.update(999, { nombre: 'X' })).toThrow(NotFoundException);
    });
  });

  describe('remove', () => {
    it('deberia eliminar el adoptante', () => {
      const creado = service.create({
        nombre: 'Juan',
        cedula: '1',
        telefono: '1',
        direccion: 'x',
      });

      const resultado = service.remove(creado.id);

      expect(resultado).toEqual({ eliminado: true });
      expect(service.findAll()).toHaveLength(0);
    });

    it('deberia lanzar NotFoundException al eliminar id inexistente', () => {
      expect(() => service.remove(999)).toThrow(NotFoundException);
    });
  });
});
