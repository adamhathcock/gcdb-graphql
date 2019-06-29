import { Resolver, Query, Args } from "@nestjs/graphql";
import { Issue as DtoIssue } from "../models/Issue";
import { Connection } from "typeorm";
import { Issue } from "../../graphql.schema";

@Resolver("Issue")
export class IssueResolver {
  public constructor(private readonly connection: Connection) {}

  @Query()
  public async issue(@Args("id") id: number): Promise<Issue | undefined> {
    const repository = this.connection.getRepository(DtoIssue);
    const issue = await repository.findOne(id, {
      relations: ["stories", "stories.type"]
    });
    if (issue) {
      return issue;
    }
    return undefined;
  }
}
