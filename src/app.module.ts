import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AssetModule } from './asset.module';
import { AssetEntity } from './asset.entity';
import {
  ApolloServerPluginLandingPageLocalDefault,
  ApolloServerPluginLandingPageProductionDefault,
} from '@apollo/server/plugin/landingPage/default';
import dotenv from 'dotenv';

const CONFIG = dotenv.config().parsed;

@Module({
  imports: [
    AssetModule,
    TypeOrmModule.forRoot({
      type: CONFIG.DB_TYPE as any,
      host: CONFIG.DB_HOST,
      port: parseInt(CONFIG.DB_PORT),
      username: CONFIG.DB_USERNAME,
      password: CONFIG.DB_PASSWORD,
      database: CONFIG.DB_DATABASE,
      entities: [AssetEntity],
      migrations: [process.cwd() + '/../migrations/*.ts'],
    }),
    TypeOrmModule.forFeature([AssetEntity]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
      playground: false,
      plugins: [
        process.env.NODE_ENV === 'production'
          ? ApolloServerPluginLandingPageProductionDefault()
          : ApolloServerPluginLandingPageLocalDefault(),
      ],
      subscriptions: {
        // eslint-disable-next-line @typescript-eslint/naming-convention
        'graphql-ws': true,
      },
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
