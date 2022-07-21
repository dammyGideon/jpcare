/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { Body, HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/user-create.dto';

import * as bcrypt from 'bcrypt';
import { FileInterceptor } from '@nestjs/platform-express';



@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private UserRepository: Repository<User>
    ){}

  async get():Promise<User[] | undefined> {
    return this.UserRepository.find();
  }

 

  async getPersonById(userId: number): Promise<User | undefined> {
    const person = await this.UserRepository.findOneBy({ id: userId });
    if (person) {
      return person;
    }
    throw new HttpException('User not found', HttpStatus.NOT_FOUND);
  }
  
  async userEmail(user_email:string):Promise<User | undefined>{
    const email=await this.UserRepository.findOneBy({parent_email:user_email})
    if(email){
      return email
    }
    throw new HttpException(`User's email does not exist`,HttpStatus.NOT_FOUND);
  }

 
  //Register users
  async createPerson(createUserDto: CreateUserDto): Promise<User | undefined> {
    const email=await this.UserRepository.findOneBy({parent_email:createUserDto.parent_email})
    if(email){
      throw new HttpException(`this user already register`,HttpStatus.FOUND);
    }
    const hashedPassword = await bcrypt.hash(createUserDto.parent_password, 12);
    createUserDto.parent_password =hashedPassword;

    const user = this.UserRepository.create(createUserDto);
    
    const user_result= this.UserRepository.save(user);
    delete (await user_result).parent_password
    return user_result;
  }


  async deleteUser(id:number){
    const delete_user= await this.UserRepository.delete(id);
    if(!delete_user.affected){
      throw new HttpException(`User not found`,HttpStatus.NOT_FOUND)
    }
    return {delete_user:true}
  }

 
}
