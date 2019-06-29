import { Module } from "@nestjs/common";
import { GraphQLModule } from "@nestjs/graphql";
import { GCDBModule } from "./gcdb/GCDBModule";

@Module({
  imports: [
    GCDBModule,
    GraphQLModule.forRoot({
      typePaths: ["./**/*.graphql"],
      debug: true,
      introspection: true,
      playground: true
    })
  ]
})
export class ApplicationModule {}
