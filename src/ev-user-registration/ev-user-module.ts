import { DynamicModule, Module, Scope } from '@nestjs/common';
import {EvUserService} from './ev-user-service';
import {EvUserResolvers} from './ev-user-resolvers'
import { EvUserController } from './ev-user-controller';


@Module({
  providers: [EvUserResolvers,EvUserService],
  controllers: [EvUserController],
})
export class EvUserModule {}


