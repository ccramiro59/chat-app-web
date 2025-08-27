import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const datasource = new DataSource({
        type: 'mongodb',
        url: 'mongodb://localhost:27017/chatappdb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return await datasource.initialize();
    },
  },
];
