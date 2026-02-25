import { Controller, Get } from '@nestjs/common';

@Controller('catalog')
export class CatalogController {
  @Get('products')
  products() {
    return [{ sku: 'BLU-POS-001', name: 'Bluetooth Scanner', price: 149.99 }];
  }
}
