import {
  PrimaryGeneratedColumn,
  Column,
  Entity,
  OneToOne,
  JoinColumn,
  ManyToOne
} from "typeorm";
import { StoryType } from "./StoryType";
import { Issue } from "./Issue";

@Entity({
  name: "gcd_story"
})
export class Story {
  @PrimaryGeneratedColumn()
  public id: number;
  @Column()
  public title: string;
  @Column()
  public feature: string;
  @Column()
  public script: string;
  @Column()
  public pencils: string;
  @Column()
  public inks: string;
  @Column()
  public colors: string;
  @Column()
  public letters: string;
  @Column()
  public genre: string;
  @Column()
  public characters: string;
  @Column()
  public synopsis: string;
  @Column()
  public notes: string;

  @Column()
  public created: string;
  @Column()
  public modified: string;

  @JoinColumn({
    name: "type_id",
    referencedColumnName: "id"
  })
  @OneToOne(() => StoryType)
  public readonly type: StoryType;

  @ManyToOne(() => Issue, issue => issue.stories)
  @JoinColumn({
    name: "issue_id",
    referencedColumnName: "id"
  })
  public readonly issue: Issue;
}
