import {
    Controller,
    Get,
  } from '@nestjs/common';
  
import {CpUserService} from './cp-user-service';



  @Controller('/evuser')
  export class CpUserController {

    constructor(private service: CpUserService ){}
  
    @Get()
    user() {

      return "Works";
    }
  
  }