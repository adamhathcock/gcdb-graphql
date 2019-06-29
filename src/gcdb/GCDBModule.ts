import { Module } from "@nestjs/common";
import { IssueResolver } from "./resolvers/IssueResolver";
import { SeriesResolver } from "./resolvers/SeriesResolver";
import { StoryResolver } from "./resolvers/StoryResolver";
import { TypeOrmModule } from "@nestjs/typeorm";
import { Issue } from "./models/Issue";
import { Series } from "./models/Series";
import { Story } from "./models/Story";
import { StoryType } from "./models/StoryType";

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: "mysql",
      host: "localhost",
      port: 3306,
      username: "root",
      password: "gcdb",
      database: "gcdb",
      entities: [Issue, Series, Story, StoryType],
      synchronize: false,
      logging: true
    })
  ],
  providers: [IssueResolver, SeriesResolver, StoryResolver]
})
export class GCDBModule {}
