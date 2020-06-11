
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {CpBookingService} from './cp.booking.service';
import {StatusUpdate} from './Model/status.update';
import {Requests} from './Model/booking.requests';


@Resolver()
export class CpBookingResolvers {
  constructor(private  CpBookingService: CpBookingService) {}


 @Query(()=> Requests)
 async request(@Args('ID') id: String)
 {
   return await this.CpBookingService.request(id);
 }

@Mutation(()=>String)
async requestStatus(@Args('input') input : StatusUpdate)
{
  return await this.CpBookingService.statusUpdate(input);
}

}
