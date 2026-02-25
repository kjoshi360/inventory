import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './modules/auth/auth.module';
import { PosModule } from './modules/pos/pos.module';
import { InventoryModule } from './modules/inventory/inventory.module';
import { CatalogModule } from './modules/catalog/catalog.module';
import { PurchasingModule } from './modules/purchasing/purchasing.module';
import { ReportingModule } from './modules/reporting/reporting.module';
import { IntegrationsModule } from './modules/integrations/integrations.module';
import { PrismaService } from './common/prisma.service';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    AuthModule,
    PosModule,
    InventoryModule,
    CatalogModule,
    PurchasingModule,
    ReportingModule,
    IntegrationsModule
  ],
  providers: [PrismaService]
})
export class AppModule {}
