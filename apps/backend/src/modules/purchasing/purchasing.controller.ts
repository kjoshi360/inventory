import { Controller, Get } from '@nestjs/common';

@Controller('purchasing')
export class PurchasingController {
  @Get('open-pos')
  openPurchaseOrders() {
    return [{ poNumber: 'PO-2026-0041', supplier: 'Blue Supply Co', status: 'receiving' }];
  }
}
