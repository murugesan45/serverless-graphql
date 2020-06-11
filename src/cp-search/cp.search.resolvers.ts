
import {Args, Mutation, Query, Resolver} from '@nestjs/graphql';
import {CpSearchService} from './cp.search.service';
import {CpSearch} from './Model/cp.search';
import {CpSearchResult} from './Model/cp.search.result';
import { CpRequest } from './Model/cp.request';



@Resolver()
export class CpSearchResolvers {
  constructor(private  CpSearchService: CpSearchService) {}


@Query(()=> CpSearchResult)

async Search(@Args('input') input: CpSearch)
{
  return await this.CpSearchService.SearchCp(input);
}

@Mutation(()=>String)
async request(@Args('input') input: CpRequest)
{
  return await this.CpSearchService.requestCp(input);
}

}
