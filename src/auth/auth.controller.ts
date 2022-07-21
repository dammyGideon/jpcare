/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable prettier/prettier */
import { BadRequestException, Body, Controller, Get, Inject, Post,Req,Res, UnauthorizedException } from '@nestjs/common';
import {Response, Request, response} from 'express';
import { AuthService } from './auth.service';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from '../models/user.entity';
import { Repository } from 'typeorm';


@Controller('api/')
export class AuthController {
    constructor(
        @InjectRepository(User)
        private userRepository:Repository<User>,
        private readonly authService:AuthService,
        private readonly userService:UserService,
        private jwtService: JwtService
    ){}
    @Post('login')
    async login(
        @Body('parent_email') parent_email: string,
        @Body('parent_password') parent_password: string,
        @Res({passthrough: true}) response: Response
    ) {
        
       
        const user = await this.authService.find_One(parent_email);
        if (!user) {
            throw new BadRequestException('invalid credentials');
        }
      

        if (!await bcrypt.compare(parent_password, user.parent_password)) {
            throw new BadRequestException('invalid credentials');
        }

        
        
        const jwt = await this.jwtService.signAsync({id: user.id});

        response.cookie('jwt', jwt, {httpOnly: true});

        return {
            message: 'success'
        };
    }


    @Get('user')
    async user(@Req() request: Request) {
        try {
            const cookie = request.cookies['jwt'];

            const data = await this.jwtService.verifyAsync(cookie);

            if (!data) {
                throw new UnauthorizedException();
            }

            const user = await this.userRepository.findOne({where :{id : data['id']}});
            
             const {parent_password, ...result} = user;

             return result;
        } catch (e) {
            throw new UnauthorizedException();
        }
    }


}
