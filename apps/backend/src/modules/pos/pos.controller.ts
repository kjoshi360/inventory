import { Body, Controller, Get, Post } from '@nestjs/common';

@Controller('pos')
export class PosController {
  @Get('health')
  health() {
    return { module: 'pos', status: 'ok' };
  }

  @Post('checkout')
  checkout(@Body() body: { items: Array<{ sku: string; qty: number }> }) {
    const totalItems = body.items.reduce((sum, item) => sum + item.qty, 0);
    return { orderId: `SO-${Date.now()}`, totalItems, status: 'created' };
  }
}
