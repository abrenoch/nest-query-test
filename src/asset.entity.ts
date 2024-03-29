import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

import { AssetCategoriesEntity } from './asset-categories.entity';

@Entity({ name: 'assets' })
export class AssetEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'asset_name' })
  assetName: string;

  @OneToMany(() => AssetCategoriesEntity, (entity) => entity.asset)
  categories: AssetCategoriesEntity[];
}
