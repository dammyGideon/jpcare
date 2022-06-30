/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/user-create.dto';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { UpdateUserDto } from './dto/user-update.dto';

@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>
    ){}

  get():Promise<User[]> {
    return this.UserRepository.find();
  }

  createUser(CreateUserDto: CreateUserDto) {
    return this.UserRepository.save(CreateUserDto);
  }

  update(UpdateUserDto:UpdateUserDto ,userId: number) {
    return this.UserRepository.update(userId, UpdateUserDto);
  }

  show(id : number) {
    return this.UserRepository.findOne({where: { id }});
  }

  delete(id: number) {
    return this.UserRepository.delete( id );
  }
}
