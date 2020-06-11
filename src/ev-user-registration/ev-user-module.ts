import {Module} from '@nestjs/common';
import {EvUserService} from './ev-user-service';
import {EvUserResolvers} from './ev-user-resolvers'
import { EvUserController } from './ev-user-controller';
import { EncryptionAndDecryption } from 'src/common/EncryptionAndDecryption';
import { CommonModule } from 'src/common/common.module';

@Module({
  providers: [EvUserResolvers,EvUserService,EncryptionAndDecryption],
  imports:[CommonModule],
  controllers: [EvUserController],
})
export class EvUserModule {}


