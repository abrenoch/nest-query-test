import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GraphQLModule } from '@nestjs/graphql';
import { ApolloDriver, ApolloDriverConfig } from '@nestjs/apollo';
import { AssetModule } from './asset.module';
import { AssetEntity } from './asset.entity';
import { AssetCategoriesEntity } from './asset-categories.entity';

@Module({
  imports: [
    AssetModule,
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: '<db_username>',
      password: '<db_password>',
      database: 'test-db',
      entities: [
        AssetEntity, AssetCategoriesEntity
      ],
    }),
    TypeOrmModule.forFeature([AssetEntity, AssetCategoriesEntity]),
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      autoSchemaFile: true,
    }),
  ],
  controllers: [],
  providers: [],
  exports: [],
})
export class AppModule {}
