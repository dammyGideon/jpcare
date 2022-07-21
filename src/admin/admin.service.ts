import { Role } from './../models/roles.enum';
/* eslint-disable prettier/prettier */
import { Get, Inject, Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateAdminDto } from './dto/create-admin.dto';
import { UpdateAdminDto } from './dto/update-admin.dto';
import { Repository } from 'typeorm';
import { User } from 'src/models/user.entity';
import { CreateProvideDto } from './dto/create-provider.dto';

@Injectable()
export class AdminService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>

  ){}

  //get parent
  
  getParent():Promise <User[] | undefined>{
    return this.userRepository.find({where :{role: Role.Parent }})
  }
  //getSingleParent(): Promise <>

  //get provider
  getProvider(): Promise<User[] | undefined> {
    return this.userRepository.find({where:{role:Role.Provider}});
  }

  //create provider

  async create(createProviderDto:CreateProvideDto) {
      const email = await this.userRepository.findOne({where :{ parent_email : createProviderDto.parent_email}})
      if(email){
        throw new HttpException(`Provider already exist`, HttpStatus.FOUND)
      }
      const provider = await this.userRepository.create(createProviderDto);
    
      delete provider.parent_password
      return provider;
    }
  


  findAll() {
    return `This action returns all admin`;
  }

  findOne(id: number) {
    return `This action returns a #${id} admin`;
  }

  update(id: number, updateAdminDto: UpdateAdminDto) {
    return `This action updates a #${id} admin`;
  }

  remove(id: number) {
    return `This action removes a #${id} admin`;
  }
}
