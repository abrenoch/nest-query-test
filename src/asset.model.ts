import { FilterableField, IDField } from '@ptc-org/nestjs-query-graphql';
import { Field, InputType, Int, ObjectType } from '@nestjs/graphql';

@ObjectType('Asset', {
  description: 'The Test model',
})
@InputType('CreateAssetInput')
export class AssetModel {

  @IDField(() => Int, { allowedComparisons: ['eq', 'in'] })
  id!: number;

  @Field(() => Int, { nullable: true })
  fileId: number;

  @FilterableField({ nullable: true })
  assetName: string;
}
