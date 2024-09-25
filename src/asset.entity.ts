import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity({ name: 'assets' })
export class AssetEntity {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'asset_name' })
  assetName: string;
}
