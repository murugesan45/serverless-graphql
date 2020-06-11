import {Module} from '@nestjs/common';
import {CpSearchService} from './cp.search.service';
import {CpSearchResolvers} from './cp.search.resolvers'
import { CpSearchController } from './cp.search.controller';

@Module({
  providers: [CpSearchResolvers,CpSearchService],
  controllers: [CpSearchController]
})
export class CpSearchModule {}


