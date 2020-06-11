import {
    Controller,
    Get,
  } from '@nestjs/common';
  
  @Controller('/')
  export class CpBookingController {

    constructor(){}
  
    @Get()
    booking() {

      return "booking method is working";
    }
  
  }