import { IsInt, IsNotEmpty, IsOptional, IsString, Min } from 'class-validator';

export class CreateMascotaDto {
  @IsNotEmpty()
  @IsString()
  nombre: string;

  @IsNotEmpty()
  @IsString()
  especie: string;

  @IsNotEmpty()
  @IsString()
  raza: string;

  @IsInt()
  @Min(0)
  edad: number;

  @IsOptional()
  @IsString()
  estado?: string;
}
