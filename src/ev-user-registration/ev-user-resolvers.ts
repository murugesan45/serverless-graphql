
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {EvUserService} from './ev-user-service';
import {EvUserType} from './Model/evuser-schema';

import {AddEvUserType} from './Model/mutation.schema';

@Resolver()
export class EvUserResolvers {
  constructor(private  EvUserService: EvUserService) {}

 @Query(()=> String)
 async checkUser(@Args('email') email : string){
   return await this.EvUserService.findUser(email);
   }

@Mutation(()=> EvUserType)
async addEvOwnerRegistration(@Args('input') input: AddEvUserType){
  return await this.EvUserService.createEvUser(input);
}

}
