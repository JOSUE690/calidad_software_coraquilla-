import { IsInt, IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateAdoptanteDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  cedula: string;

  @IsNotEmpty()
  @IsString()
  telefono: string;

  @IsNotEmpty()
  @IsString()
  direccion: string;

  @IsOptional()
  @IsInt()
  mascotaAdoptadaId?: number;
}
