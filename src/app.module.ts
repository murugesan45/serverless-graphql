import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { EvUserModule } from './ev-user-registration/ev-user-module';
import { GraphQLModule } from '@nestjs/graphql';
import {ApiModule} from './api-module';
import {CpUserModule} from './cp-user-registration/cp-user-module';
import { CpSearchModule } from './cp-search/cp.search.module';
import {BillModule} from './bill-calculation/bill.module';
import { CommonModule } from './common/common.module';
import { CpBookingModule } from './cp-booking-status/cp.booking.module';

@Module({
  imports: [
    EvUserModule,
    CpUserModule,
    CpSearchModule,
    BillModule,
    CommonModule,
    CpBookingModule,
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      }),
    ApiModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
