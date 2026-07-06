import { Module } from '@nestjs/common';
import { MascotaModule } from './mascota/mascota.module';
import { AdoptanteModule } from './adoptante/adoptante.module';

@Module({
  imports: [MascotaModule, AdoptanteModule],
})
export class AppModule {}
