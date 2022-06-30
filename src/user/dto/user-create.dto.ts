/* eslint-disable prettier/prettier */
import { IsEmail, IsNumber, IsString } from 'class-validator';

export class CreateUserDto {
  @IsString()
  name: string;

  @IsEmail()
  email: string;

  @IsNumber()
  cell_number: number

  @IsString()
  parent_photo:string
  
  @IsString()
  password:string;
  
  @IsString()
  child_name:string;

  @IsString()
  dob:string;

  @IsString()
  allergies:string

  @IsString()
  child_photo:string

}
