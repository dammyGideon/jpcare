/* eslint-disable prettier/prettier */
import { Controller, Get, Param, Patch, Post, Req } from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(){
    return {name:'Tolu', age:44, email:'oh,yes' }
  }

  @Post()
  userLogin(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }

  @Patch('/:userId')
  update(@Req() req: Request) {
    console.log(req.body);
    return req.body;
  }


  // @Get('/:userId')
  // getUser(@Param() userId: number) {
  //   return userId;
  // }

}
