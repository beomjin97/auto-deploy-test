import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DBHOST,
        port: 3306,
        username: 'root',
        password: 'password',
        database: 'mydb',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize().then(() => {
        console.log('db connetion');
      });
    },
  },
];
