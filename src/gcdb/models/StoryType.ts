import { PrimaryGeneratedColumn, Column, Entity } from "typeorm";
@Entity({
  name: "gcd_story_type"
})
export class StoryType {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public name: string;
}
