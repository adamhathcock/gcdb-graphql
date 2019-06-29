import { Resolver, Query, Args } from "@nestjs/graphql";
import { Connection } from "typeorm";
import { Series } from "../models/Series";

@Resolver("Series")
export class SeriesResolver {
  public constructor(private readonly connection: Connection) {}

  @Query()
  public async series(@Args("id") id: number): Promise<Series | undefined> {
    const repository = this.connection.getRepository(Series);
    return repository.findOne(id, {
      relations: ["issues"]
    });
  }
}
