/* eslint-disable prettier/prettier */
import { DataSource } from "typeorm";


export const AppDataSource = new DataSource({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "",
    database: "jc_pack",
    entities: ["dist/**/*.entity{.ts,.js}"],
    logging:true,
    synchronize: true,
    migrationsRun:false,
    migrations:['dist/**/migrations/*.js'],
    migrationsTableName:'users'
})