import { QR_archive } from './qr.entity';
import { Repository } from 'typeorm';
export declare class QrService {
    private qrRepository;
    constructor(qrRepository: Repository<QR_archive>);
    generateQRCode(accountNo: string, amount: number): Promise<string>;
}
