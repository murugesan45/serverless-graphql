import {Module} from '@nestjs/common';
import {CpBookingService} from './cp.booking.service';
import {CpBookingResolvers} from './cp.booking.resolvers'
import { CpBookingController } from './cp.booking.controller';

@Module({
  providers: [CpBookingResolvers,CpBookingService],
  controllers:[CpBookingController]
})
export class CpBookingModule {}


