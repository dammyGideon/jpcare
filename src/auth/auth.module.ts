/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { UserModule } from '../user/user.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/models/user.entity';
import { JwtModule } from '@nestjs/jwt';

@Module({
  controllers: [AuthController],
  providers: [AuthService],
  imports: [
    UserModule,
     TypeOrmModule.forFeature([User]),
     JwtModule.register({
      secret: 'secret',
      signOptions: {expiresIn: '1d'}
     })
    ],
})
export class AuthModule {}
