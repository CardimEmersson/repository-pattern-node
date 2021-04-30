import 'reflect-metadata';
import { createConnection } from 'typeorm';

createConnection({
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '',
  database: 'typeorm_mysql',
  entities: [__dirname + '../../../src/entities/*.ts'],
  synchronize: true,
}).catch(error => console.log(error));
