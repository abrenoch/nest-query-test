import {
  type DeepPartial,
  InjectQueryService,
  ProxyQueryService,
  QueryService,
} from '@ptc-org/nestjs-query-core';
import { AssetEntity } from './asset.entity';
// import { CreateOneAssetInputDTO } from './create-one-asset.dto';

@QueryService(AssetEntity)
export class AssetQueryService extends ProxyQueryService<AssetEntity> {
  constructor(
    @InjectQueryService(AssetEntity)
    private service: QueryService<AssetEntity>,
  ) {
    super(service);
  }

  async createOne(input: DeepPartial<AssetEntity>): Promise<AssetEntity> {
    console.log('AssetQueryService.createOne', input);

    const newAsset = new AssetEntity();
    newAsset.assetName = 'hello';
    newAsset.id = 1;

    return Promise.resolve(newAsset);
  }
}
