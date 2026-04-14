import { Module } from '@nestjs/common';
import { QrModule } from './qr/qr.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    QrModule,
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 688,
      username: 'admin',
      password: 'admin123',
      database: 'qr_db',
      autoLoadEntities: true, // Automatically loads entities
      synchronize: true,
    }),
  ],
})
export class AppModule {}
