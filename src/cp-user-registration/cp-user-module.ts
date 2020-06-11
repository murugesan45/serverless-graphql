import {Module} from '@nestjs/common';
import {CpUserService} from './cp-user-service';
import {CpUserResolvers} from './cp-user-resolvers'
import { CpUserController } from './cp-user-controller';
import { EncryptionAndDecryption } from '../common/EncryptionAndDecryption';
import{CommonModule} from 'src/common/common.module';

@Module({
  providers: [CpUserResolvers,CpUserService,EncryptionAndDecryption],
  imports: [CommonModule],
  controllers: [CpUserController],
})
export class CpUserModule {}


