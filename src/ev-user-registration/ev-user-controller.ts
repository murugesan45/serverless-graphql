import {
    Controller,
    Get,
  } from '@nestjs/common';
  
import {EvUserService} from './ev-user-service';



  @Controller('/evuser')
  export class EvUserController {

    constructor(private service: EvUserService ){}
  
    @Get()
    showCommentsByIdea() {
     return "works";
     // return this.service.findAll();
    }
  
  }