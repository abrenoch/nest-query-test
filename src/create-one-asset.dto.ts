import { Field, InputType } from '@nestjs/graphql';
import { CreateOneInputType } from '@ptc-org/nestjs-query-graphql';

import { AssetModel } from './asset.model';

@InputType()
export class CreateOneAssetInputDTO extends CreateOneInputType(
  'asset',
  AssetModel,
) {
  @Field(() => String)
  filePath: string;
}
