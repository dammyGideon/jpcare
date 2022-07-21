/* eslint-disable prettier/prettier */
import { IsEmail, IsString } from 'class-validator';


export class CreateProvideDto{
  
  @IsString()
  parent_name:string;

  @IsEmail({unique : true})
  parent_email:string;
 
  @IsString()
  parent_password

  @IsString()
  parent_number

  @IsString()
  parent_dob;
 
  @IsString()
  parent_photo


  
}

