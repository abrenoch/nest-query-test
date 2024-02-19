import { FilterableField, IDField, UnPagedRelation } from '@ptc-org/nestjs-query-graphql';
import { Field, Int, ObjectType } from '@nestjs/graphql';
import { AssetCategoriesModel } from './asset-categories.model';

@ObjectType('Asset', {
  description: 'The Test model',
})
@UnPagedRelation('categories', () => AssetCategoriesModel)
export class AssetModel {

  @IDField(() => Int, { allowedComparisons: ['eq', 'in'] })
  id!: number;

  @Field(() => Int, { nullable: true })
  fileId: number;

  @FilterableField({ nullable: true })
  assetName: string;
}
