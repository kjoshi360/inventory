import { Controller, Get } from '@nestjs/common';

@Controller('inventory')
export class InventoryController {
  @Get('snapshot')
  snapshot() {
    return {
      lowStock: 19,
      warehouses: 4,
      geoEnabled: true
    };
  }
}
