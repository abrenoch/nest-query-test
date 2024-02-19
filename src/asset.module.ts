import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';

import { AssetEntity } from './asset.entity';
import { AssetModel } from './asset.model';
// import { AssetResolver } from './asset.resolver';
// import { AssetService } from './asset.service';
// import { AssetCategoriesEntity } from './asset-categories.entity';
// import { AssetCategoriesModel } from './asset-categories.model';

const handlers = [];

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [
        NestjsQueryTypeOrmModule.forFeature([
          AssetEntity,
          // AssetCategoriesEntity,
        ]),
      ],
      dtos: [
        { DTOClass: AssetModel },
        // { DTOClass: AssetCategoriesModel },
      ],
      resolvers: [
        {
          DTOClass: AssetModel,
          EntityClass: AssetEntity,
          enableSubscriptions: true,
          read: {
            one: { name: 'getAsset' },
            many: { name: 'getAssets' },
          },
        },
      ],
    }),
  ],
})
export class AssetModule {}
