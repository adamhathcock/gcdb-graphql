import { GraphQLServer } from "graphql-yoga";

import { Issue } from "./models/Issue";
import { Series } from "./models/Series";
import { getConnection } from "./models";

const typeDefs = `
  type Query {
    issue(id: ID!): Issue
    series(id: ID!): Series
  }
  type Issue {
    id: ID!
    title: String
    series: Series
  }
  type Series {
    id: ID!
    name: String
  }
`;

export async function getServer(): Promise<GraphQLServer> {
  const connection = await getConnection();

  const resolvers = {
    Query: {
      issue: (_, { id }) => {
        const repository = connection.getRepository(Issue);
        return repository.findOne(id);
      },
      series: (_, { id }) => {
        const repository = connection.getRepository(Series);
        return repository.findOne(id);
      }
    }
  };

  return new GraphQLServer({
    typeDefs,
    resolvers
  });
}
