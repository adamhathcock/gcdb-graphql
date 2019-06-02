import { Issue } from "./Issue";
import { Series } from "./Series";
import "reflect-metadata";
import { createConnection, Connection } from "typeorm";
import { StoryType } from "./StoryType";
import { Story } from "./Story";

export async function getConnection(): Promise<Connection> {
  return createConnection({
    type: "mysql",
    host: "localhost",
    port: 3306,
    username: "root",
    password: "gcdb",
    database: "gcdb",
    entities: [Issue, Series, Story, StoryType],
    synchronize: false,
    logging: true
  });
}
