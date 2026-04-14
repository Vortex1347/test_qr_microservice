import { Module } from '@nestjs/common';
import { QrController } from './qr.controller';
import { QrService } from './qr.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { QR_archive } from './qr.entity';

@Module({
  controllers: [QrController],
  providers: [QrService],
  imports: [TypeOrmModule.forFeature([QR_archive])],
})
export class QrModule {}
