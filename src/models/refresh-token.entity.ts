/* eslint-disable prettier/prettier */
import {sign} from 'jsonwebtoken';


class RefreshToken{

    constructor(init?: Partial<RefreshToken>){
        Object.assign(this.id,init);
    }

    id:number;
    userId: number;
    userAgent: string;
    ipAddress: string;

    sign(): string{
        return sign({...this}, process.env.REFRESH_SECRET);
    }
}

export default RefreshToken