import { Issue } from "./Issue";
import { PrimaryGeneratedColumn, Column, Entity, OneToMany } from "typeorm";

@Entity({
  name: "gcd_series"
})
export class Series {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public name: string;
  @Column()
  public notes: string;
  @Column()
  public year_began: number;
  @Column()
  public year_ended: number;


  @Column()
  public created: string;
  @Column()
  public modified: string;

  @OneToMany(() => Issue, issue => issue.series)
  public readonly issues?: Issue[];
}
