import {
    Controller,
    Get,
  } from '@nestjs/common';
  
  @Controller('/evuser')
  export class EvUserController {

    constructor(){}
  
    @Get()
    user() {
     return "works";
    }
  
  }