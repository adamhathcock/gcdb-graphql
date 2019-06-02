import { GraphQLServer } from "graphql-yoga";

import { Issue } from "./models/Issue";
import { Series } from "./models/Series";
import { getConnection } from "./models";
import { Story } from "./models/Story";

const typeDefs = `
  type Query {
    issue(id: ID!): Issue
    series(id: ID!): Series
    story(id: ID!): Story
  }
  type Issue {
    id: ID!
    volume: String!
    notes: String!
    publication_date: String!

    series: Series
    stories: [Story]
  }
  type Series {
    id: ID!
    name: String!
    notes: String!

    year_began: Int!
    year_ended: Int

    issues: [Issue]
  }
  type Story {
    id: ID!
    title: String!
    notes: String!
    feature: String!

    script: String!
    pencils: String!
    inks: String!
    colors: String!
    letters: String!
    genre: String!
    characters: String!
    synopsis: String!


    issue: Issue
    type: StoryType
  }
  type StoryType {
    id: ID!
    name: String!
  }
`;

export async function getServer(): Promise<GraphQLServer> {
  const connection = await getConnection();

  const resolvers = {
    Query: {
      issue: (_, { id }) => {
        const repository = connection.getRepository(Issue);
        return repository.findOne(id, {
          relations: ['stories', 'stories.type']
        });
      },
      series: (_, { id }) => {
        const repository = connection.getRepository(Series);
        return repository.findOne(id, {
          relations: ["issues"]
        });
      },
      story: (_, { id }) => {
        const repository = connection.getRepository(Story);
        return repository.findOne(id, {
          relations: ['type']
        });
      }
    }
  };

  return new GraphQLServer({
    typeDefs,
    resolvers
  });
}
