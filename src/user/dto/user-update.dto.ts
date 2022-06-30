/* eslint-disable prettier/prettier */
import { IsEmail, IsString,IsNumber } from 'class-validator';

export class UpdateUserDto {
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
