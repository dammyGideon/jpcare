/* eslint-disable prettier/prettier */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name:string;

  @Column()
  email:string;
  
  @Column()
  cell_number: number

  @Column()
  parent_photo:string
  
  @Column()
  password:string;
  
  @Column()
  child_name:string;

  @Column()
  dob:string;

  @Column()
  allergies:string

  @Column()
  child_photo:string
}
