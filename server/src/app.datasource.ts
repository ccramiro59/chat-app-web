import { join } from 'path';
import { DataSource } from 'typeorm';

const AppDataSource = new DataSource({
  type: 'mongodb',
  url: 'mongodb://localhost:27017/chatappdb',
  entities: [join(process.cwd(), '/dist/src/**/*.entity{.ts,.js}')],
  synchronize: true,
  migrations: [join(process.cwd(), '/dist/migrations/*{.ts,.js}')],
});

export default AppDataSource;
