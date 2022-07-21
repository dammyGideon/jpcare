/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Body, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { User } from 'src/models/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';


@Injectable()
export class AuthService {  
    constructor(
        @InjectRepository(User)
        private readonly userRepository:Repository<User | undefined> 
        ){}

        async find_One(user_email:string): Promise<User | undefined> {
            const email=await this.userRepository.findOneBy({parent_email:user_email})
            if(email){
              return email
            }
            throw new HttpException(`User's email does not exist`,HttpStatus.NOT_FOUND);
           
        }
}
