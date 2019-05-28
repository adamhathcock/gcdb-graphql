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

  @OneToMany(() => Issue, issue => issue.series)
  public readonly issues?: Issue[];
}
