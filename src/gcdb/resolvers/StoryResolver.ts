import {
  Resolver,
  Query,
  Args,
  Parent,
  ResolveProperty
} from "@nestjs/graphql";
import { Connection } from "typeorm";
import { Story } from "../models/Story";
import { StoryType } from "../models/StoryType";

@Resolver("Story")
export class StoryResolver {
  public constructor(private readonly connection: Connection) {}

  @Query()
  public async story(@Args("id") id: number): Promise<Story | undefined> {
    const repository = this.connection.getRepository(Story);
    return await repository.findOne(id);
  }

  @ResolveProperty()
  public async type(@Parent() story: Story): Promise<StoryType | undefined> {
    const { type } = story;

    const repository = this.connection.getRepository(StoryType);
    return await repository.findOne(type);
  }
}
