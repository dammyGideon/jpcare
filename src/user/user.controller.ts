/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Patch,
  Post,
  Req,
} from '@nestjs/common';
import * as bcrypt from 'bcrypt';

import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';
import { User } from '../models/user.entity';
import { Request } from 'express';

@Controller('api/users')
export class UserController {
  constructor(private  readonly userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.get();
  }


  @Post()
  async createPerson(
    @Body() createUserDto: CreateUserDto
    ): Promise<User> {
      return this.userService.createPerson( createUserDto,);
  }
 

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  @Get('/:id')
  async getSingleUser(@Param('id') id:string):Promise<User> {
    return this.userService.getPersonById(Number(id));
  }


  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.deleteUser(userId);
  }
}
