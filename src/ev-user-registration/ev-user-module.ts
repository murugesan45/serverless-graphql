import { DynamicModule, Module, Scope } from '@nestjs/common';
import {EvUserService} from './ev-user-service';
import {EvUserResolvers} from './ev-user-resolvers'
import { EvUserController } from './ev-user-controller';
import { EncryptionAndDecryption } from 'src/common/EncryptionAndDecryption';


@Module({
  providers: [EvUserResolvers,EvUserService,EncryptionAndDecryption],
  controllers: [EvUserController],
})
export class EvUserModule {}


