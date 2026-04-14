import { Controller, Post, Body } from '@nestjs/common';
import { QrService } from './qr.service';

@Controller('qr')
export class QrController {
  constructor(private readonly qrService: QrService) {}

  @Post('generate')
  generateQRCode(@Body() body: { accountNo: string; amount: number }) {
    return this.qrService.generateQRCode(body.accountNo, body.amount);
  }
}
