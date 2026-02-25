import { Body, Controller, Get, Post } from '@nestjs/common';
import { IntegrationsService } from './integrations.service';

@Controller('integrations')
export class IntegrationsController {
  constructor(private readonly integrationsService: IntegrationsService) {}

  @Get('status')
  status() {
    return this.integrationsService.status();
  }

  @Post('inventory-adjusted')
  async inventoryAdjusted(@Body() payload: Record<string, unknown>) {
    await this.integrationsService.emitInventoryAdjusted(payload);
    return { accepted: true };
  }
}
