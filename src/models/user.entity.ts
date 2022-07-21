/* eslint-disable prettier/prettier */
import { IsEmail, isNotEmpty, IsNotEmpty, IsString } from 'class-validator';
import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';

import { Role } from './roles.enum';
@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @IsNotEmpty()
  @IsString()
  @Column()
  parent_name:string;

  @IsNotEmpty()
  @IsString()
  @Column()
  parent_password:string;

  @IsNotEmpty()
  @IsEmail()
  @Column()
  parent_email:string;

  @IsNotEmpty()
  @IsString()
  @Column()
  parent_number:string;

  @IsNotEmpty()
  @IsString()
  @Column({nullable:true})
  parent_dob:string;

  @IsNotEmpty()
  @IsString()
  @Column()
  parent_photo:string;

  @Column({type:'enum', enum:Role, default:Role.Parent})
  role:Role
  
  @CreateDateColumn()
  createAt:Date

  @UpdateDateColumn()
  updateAt:Date
}
