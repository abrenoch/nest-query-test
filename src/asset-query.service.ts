import {
  type DeepPartial,
  InjectQueryService,
  ProxyQueryService,
  QueryService,
} from '@ptc-org/nestjs-query-core';
import { AssetEntity } from './asset.entity';
import { AssetModel } from './asset.model';
import { CreateOneAssetInputDTO } from './create-one-asset.dto';

// @QueryService(AssetModel) // disabled this to make the linter stop complaining - not sure if this is correct
export class AssetQueryService extends ProxyQueryService<
  AssetModel,
  CreateOneAssetInputDTO
> {
  constructor(
    @InjectQueryService(AssetEntity)
    private service: QueryService<AssetModel, CreateOneAssetInputDTO>,
  ) {
    super(service);
  }

  async createOne(input: CreateOneAssetInputDTO): Promise<AssetModel> {
    console.log('AssetQueryService.createOne', input); // excpecting to see "filePath" from CreateOneAssetInputDTO here

    const newAsset = new AssetEntity();
    newAsset.assetName = 'hello';
    newAsset.id = 1;

    return Promise.resolve(newAsset);
  }
}
