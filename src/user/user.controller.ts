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

import { UserService } from './user.service';
import { CreateUserDto } from './dto/user-create.dto';
import { UpdateUserDto } from './dto/user-update.dto';

@Controller('/users')
export class UserController {
  constructor(private userService: UserService) {}

  @Get()
  getUser() {
    return this.userService.get();
  }

  @Post()
  store(CreateUserDto: CreateUserDto) {
    return this.userService.createUser(CreateUserDto);
  }

  @Patch('/:userId')
  updateUser(
    UpdateUserDto: UpdateUserDto,
    @Param('userId', ParseIntPipe) userId: number,
  ) {
    return this.userService.update(UpdateUserDto, userId);
  }

  // eslint-disable-next-line @typescript-eslint/adjacent-overload-signatures
  @Get('/:userId')
  getSingleUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.show(userId);
  }
  @Delete('/:userId')
  deleteUser(@Param('userId', ParseIntPipe) userId: number) {
    return this.userService.delete(userId);
  }
}
