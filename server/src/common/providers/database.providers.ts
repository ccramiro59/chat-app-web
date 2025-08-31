import AppDataSource from '../../app.datasource';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      return await AppDataSource.initialize();
    },
  },
];
