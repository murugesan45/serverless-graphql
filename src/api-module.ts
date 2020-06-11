
import { Module } from '@nestjs/common';
import { EvUserModule } from './ev-user-registration/ev-user-module';
import { CpUserModule } from './cp-user-registration/cp-user-module';
import { CpSearchModule } from './cp-search/cp.search.module';
import { BillModule } from './bill-calculation/bill.module';
import { CpBookingModule } from './cp-booking-status/cp.booking.module';


@Module({
  imports: [EvUserModule,CpUserModule,CpSearchModule,BillModule,CpBookingModule],
  providers: [],
  exports: [ EvUserModule,CpUserModule,CpSearchModule,BillModule,CpBookingModule],
})
export class ApiModule {}