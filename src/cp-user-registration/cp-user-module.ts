import {Module} from '@nestjs/common';
import {CpUserService} from './cp-user-service';
import {CpUserResolvers} from './cp-user-resolvers'
import { CpUserController } from './cp-user-controller';


@Module({
  providers: [CpUserResolvers,CpUserService],
  controllers: [CpUserController],
})
export class CpUserModule {}


