import {
    Controller,
    Get,
  } from '@nestjs/common';
  
  @Controller('/evuser')
  export class CpSearchController {

    constructor(){}
  
    @Get()
    search() {

      return "search method is working";
    }
  
  }