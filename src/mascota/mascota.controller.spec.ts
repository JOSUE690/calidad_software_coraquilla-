import { Test, TestingModule } from '@nestjs/testing';
import { MascotaController } from './mascota.controller';
import { MascotaService } from './mascota.service';

describe('MascotaController', () => {
  let controller: MascotaController;
  let service: MascotaService;

  const mascotaMock = {
    id: 1,
    nombre: 'Firulais',
    especie: 'perro',
    raza: 'labrador',
    edad: 2,
    estado: 'disponible',
  };

  // Mock del service: no probamos la logica real aqui,
  // solo que el controller llame correctamente al service.
  const mascotaServiceMock = {
    create: jest.fn().mockReturnValue(mascotaMock),
    findAll: jest.fn().mockReturnValue([mascotaMock]),
    findOne: jest.fn().mockReturnValue(mascotaMock),
    update: jest.fn().mockReturnValue({ ...mascotaMock, edad: 3 }),
    remove: jest.fn().mockReturnValue({ eliminado: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [MascotaController],
      providers: [
        { provide: MascotaService, useValue: mascotaServiceMock },
      ],
    }).compile();

    controller = module.get<MascotaController>(MascotaController);
    service = module.get<MascotaService>(MascotaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deberia estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('create() deberia llamar a service.create con el dto y retornar el resultado', () => {
    const dto = { nombre: 'Firulais', especie: 'perro', raza: 'labrador', edad: 2 };

    const resultado = controller.create(dto);

    expect(service.create).toHaveBeenCalledWith(dto);
    expect(resultado).toEqual(mascotaMock);
  });

  it('findAll() deberia llamar a service.findAll y retornar la lista', () => {
    const resultado = controller.findAll();

    expect(service.findAll).toHaveBeenCalled();
    expect(resultado).toEqual([mascotaMock]);
  });

  it('findOne() deberia llamar a service.findOne con el id correcto', () => {
    const resultado = controller.findOne(1);

    expect(service.findOne).toHaveBeenCalledWith(1);
    expect(resultado).toEqual(mascotaMock);
  });

  it('update() deberia llamar a service.update con id y dto', () => {
    const dto = { edad: 3 };

    const resultado = controller.update(1, dto);

    expect(service.update).toHaveBeenCalledWith(1, dto);
    expect(resultado.edad).toBe(3);
  });

  it('remove() deberia llamar a service.remove con el id correcto', () => {
    const resultado = controller.remove(1);

    expect(service.remove).toHaveBeenCalledWith(1);
    expect(resultado).toEqual({ eliminado: true });
  });
});
