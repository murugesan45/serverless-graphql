import {Module} from '@nestjs/common';
import {CpUserService} from './cp-user-service';
import {CpUserResolvers} from './cp-user-resolvers'
import { CpUserController } from './cp-user-controller';
import { EncryptionAndDecryption } from 'src/common/EncryptionAndDecryption';


@Module({
  providers: [CpUserResolvers,CpUserService,EncryptionAndDecryption],
  controllers: [CpUserController],
})
export class CpUserModule {}


