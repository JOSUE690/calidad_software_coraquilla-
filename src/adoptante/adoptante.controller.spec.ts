import { Test, TestingModule } from '@nestjs/testing';
import { AdoptanteController } from './adoptante.controller';
import { AdoptanteService } from './adoptante.service';

describe('AdoptanteController', () => {
  let controller: AdoptanteController;
  let service: AdoptanteService;

  const adoptanteMock = {
    id: 1,
    nombre: 'Juan Perez',
    cedula: '1712345678',
    telefono: '0999999999',
    direccion: 'Quito',
  };

  const adoptanteServiceMock = {
    create: jest.fn().mockReturnValue(adoptanteMock),
    findAll: jest.fn().mockReturnValue([adoptanteMock]),
    findOne: jest.fn().mockReturnValue(adoptanteMock),
    update: jest.fn().mockReturnValue({ ...adoptanteMock, mascotaAdoptadaId: 5 }),
    remove: jest.fn().mockReturnValue({ eliminado: true }),
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AdoptanteController],
      providers: [
        { provide: AdoptanteService, useValue: adoptanteServiceMock },
      ],
    }).compile();

    controller = module.get<AdoptanteController>(AdoptanteController);
    service = module.get<AdoptanteService>(AdoptanteService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('deberia estar definido', () => {
    expect(controller).toBeDefined();
  });

  it('create() deberia llamar a service.create con el dto', () => {
    const dto = {
      nombre: 'Juan Perez',
      cedula: '1712345678',
      telefono: '0999999999',
      direccion: 'Quito',
    };

    const resultado = controller.create(dto);

    expect(service.create).toHaveBeenCalledWith(dto);
    expect(resultado).toEqual(adoptanteMock);
  });

  it('findAll() deberia llamar a service.findAll', () => {
    const resultado = controller.findAll();

    expect(service.findAll).toHaveBeenCalled();
    expect(resultado).toEqual([adoptanteMock]);
  });

  it('findOne() deberia llamar a service.findOne con el id correcto', () => {
    const resultado = controller.findOne(1);

    expect(service.findOne).toHaveBeenCalledWith(1);
    expect(resultado).toEqual(adoptanteMock);
  });

  it('update() deberia llamar a service.update con id y dto', () => {
    const dto = { mascotaAdoptadaId: 5 };

    const resultado = controller.update(1, dto);

    expect(service.update).toHaveBeenCalledWith(1, dto);
    expect(resultado.mascotaAdoptadaId).toBe(5);
  });

  it('remove() deberia llamar a service.remove con el id correcto', () => {
    const resultado = controller.remove(1);

    expect(service.remove).toHaveBeenCalledWith(1);
    expect(resultado).toEqual({ eliminado: true });
  });
});
