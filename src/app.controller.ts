/* eslint-disable @typescript-eslint/no-empty-function */
/* eslint-disable prettier/prettier */
import { Controller, Get, Render } from '@nestjs/common';
@Controller()
export class AppController {
@Get()
@Render('index')
index() { }



}