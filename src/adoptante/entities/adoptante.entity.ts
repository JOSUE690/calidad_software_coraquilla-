export class Adoptante {
  id: number;
  nombre: string;
  cedula: string;
  telefono: string;
  direccion: string;
  mascotaAdoptadaId?: number; // referencia opcional a la mascota adoptada
}
