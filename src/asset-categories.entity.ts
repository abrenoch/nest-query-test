import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

import { AssetEntity } from './asset.entity';

@Entity({ name: 'asset_categories' })
export class AssetCategoriesEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  asset_id: number;

  @ManyToOne(() => AssetEntity)
  @JoinColumn({ name: 'asset_id' })
  asset: AssetEntity;
}
