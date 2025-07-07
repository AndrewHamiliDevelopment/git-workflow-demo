/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import { Module } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useFactory: (config: ConfigService) => {
        const dialect = config.getOrThrow<string>('DATABASE_HOST');
        const host = config.getOrThrow<string>('DATABASE_HOST');
        const port = config.getOrThrow<number>('DATABASE_PORT');
        const database = config.getOrThrow<string>('DATABASE_NAME');
        const username = config.getOrThrow<string>('DATABASE_USERNAME');
        const password = config.getOrThrow<string>('DATABASE_PASSWORD');
        switch (dialect) {
          case 'mysql':
            return {
              type: 'mysql',
              host,
              port,
              database,
              username,
              password,
              autoloadEntities: true,
              logging: false,
              entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
              synchronize: false,
            };
          case 'postgres':
            return {
              type: 'postgres',
              host,
              port,
              database,
              username,
              password,
              autoloadEntities: true,
              logging: false,
              entities: [__dirname + '/../**/entities/*.entity{.ts,.js}'],
              synchronize: false,
            };
          default:
            throw new Error(`${dialect} is supported at this time`);
        }
      },
      inject: [ConfigService],
    }),
  ],
})
export class DatabaseModule {}
