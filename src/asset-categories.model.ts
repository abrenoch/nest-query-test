import { ID, Int, ObjectType } from '@nestjs/graphql';

import {
  FilterableField,
  IDField,
  Relation,
} from '@ptc-org/nestjs-query-graphql';
import { AssetModel } from './asset.model';

@ObjectType('AssetCategories', {
  description: 'The Test model',
})
@Relation('asset', () => AssetModel, {
  nullable: false,
})
export class AssetCategoriesModel {
  @IDField(() => ID)
  id!: number;

  @FilterableField(() => Int)
  asset_id: number;
}
