import { Injectable } from '@nestjs/common';
import QRCode from 'qrcode';
import { QR_archive } from './qr.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class QrService {
  constructor(
    @InjectRepository(QR_archive)
    private qrRepository: Repository<QR_archive>,
  ) {}

  async generateQRCode(accountNo: string, amount: number) {
    const existing = await this.qrRepository.findOne({
      where: { accountNo, amount },
    });
    if (existing) return existing.qrCode;
    const qrCode = await QRCode.toDataURL(`${accountNo} ${amount}`);
    const record = this.qrRepository.create({ accountNo, amount, qrCode });
    await this.qrRepository.save(record);
    return qrCode;
  }
}
