import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne
} from "typeorm";

import { Series } from "./Series";

@Entity({
  name: "gcd_issue"
})
export class Issue {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public number: string;
  @Column()
  public volume: string;

  @Column()
  public notes: string;
  @Column()
  public publication_date: string;

  @Column()
  public series_id: number;

  @ManyToOne(() => Series)
  @JoinColumn({
    name: "series_id",
    referencedColumnName: "id"
  })
  public readonly series?: Series;
}
