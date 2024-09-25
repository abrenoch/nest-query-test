import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NestjsQueryGraphQLModule } from '@ptc-org/nestjs-query-graphql';
import { NestjsQueryTypeOrmModule } from '@ptc-org/nestjs-query-typeorm';
import { AssetQueryService } from './asset-query.service';
import { AssetEntity } from './asset.entity';
import { AssetModel } from './asset.model';
import { CreateOneAssetInputDTO } from './create-one-asset.dto';

@Module({
  imports: [
    NestjsQueryGraphQLModule.forFeature({
      imports: [NestjsQueryTypeOrmModule.forFeature([AssetEntity])],
      services: [AssetQueryService],
      dtos: [{ DTOClass: AssetModel }],
      resolvers: [
        {
          DTOClass: AssetModel,
          EntityClass: AssetEntity,
          enableSubscriptions: true,
          ServiceClass: AssetQueryService,
          read: {
            one: { name: 'getAsset' },
            many: { name: 'getAssets' },
          },
          create: {
            CreateOneInput: CreateOneAssetInputDTO,
          },
        },
      ],
    }),
  ],
})
export class AssetModule {}
