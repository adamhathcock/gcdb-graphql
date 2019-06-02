import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  JoinColumn,
  ManyToOne,
  OneToMany
} from "typeorm";

import { Series } from "./Series";
import { Story } from "./Story";

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

  @ManyToOne(() => Series)
  @JoinColumn({
    name: "series_id",
    referencedColumnName: "id"
  })
  public readonly series?: Series;

  @OneToMany(() => Story, story => story.issue)
  public readonly stories?: Story[];
}
