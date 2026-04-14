"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.QrService = void 0;
const common_1 = require("@nestjs/common");
const qrcode_1 = __importDefault(require("qrcode"));
const qr_entity_1 = require("./qr.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let QrService = class QrService {
    qrRepository;
    constructor(qrRepository) {
        this.qrRepository = qrRepository;
    }
    async generateQRCode(accountNo, amount) {
        const existing = await this.qrRepository.findOne({
            where: { accountNo, amount },
        });
        if (existing)
            return existing.qrCode;
        const qrCode = await qrcode_1.default.toDataURL(`${accountNo} ${amount}`);
        const record = this.qrRepository.create({ accountNo, amount, qrCode });
        await this.qrRepository.save(record);
        return qrCode;
    }
};
exports.QrService = QrService;
exports.QrService = QrService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(qr_entity_1.QR_archive)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], QrService);
//# sourceMappingURL=qr.service.js.map