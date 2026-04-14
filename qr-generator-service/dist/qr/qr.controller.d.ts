import { QrService } from './qr.service';
export declare class QrController {
    private readonly qrService;
    constructor(qrService: QrService);
    generateQRCode(body: {
        accountNo: string;
        amount: number;
    }): Promise<string>;
}
