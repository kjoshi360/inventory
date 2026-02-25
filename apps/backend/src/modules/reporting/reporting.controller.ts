import { Controller, Get } from '@nestjs/common';

@Controller('reporting')
export class ReportingController {
  @Get('daily')
  daily() {
    return { sales: 12840, orders: 46, topSku: 'BLU-POS-001' };
  }
}
