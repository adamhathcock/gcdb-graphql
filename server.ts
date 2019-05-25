import { Sequelize } from "sequelize";
import { GraphQLServer } from "graphql-yoga";
import { createContext, EXPECTED_OPTIONS_KEY } from "dataloader-sequelize";
import { resolver } from "graphql-sequelize";

import models from "./models";
import { Issue } from "./models/Issue";
import { Series } from "./models/Series";

const sequelize = new Sequelize("mysql://root:gcdb@localhost:3306/gcdb");

models(sequelize);

const typeDefs = `
  type Query {
    issue(id: ID!): Issue
    issues: [Issue]
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

const resolvers = {
  Query: {
    issue: resolver(Issue),
    issues: resolver(Issue),
    series: resolver(Series)
  },
  Issue: {
    series: resolver(Issue.Series)
  }
};

resolver.contextToOptions = { [EXPECTED_OPTIONS_KEY]: EXPECTED_OPTIONS_KEY };

const server = new GraphQLServer({
  typeDefs,
  resolvers,
  context() {
    // For each request, create a DataLoader context for Sequelize to use
    const dataloaderContext = createContext(sequelize);

    // Using the same EXPECTED_OPTIONS_KEY, store the DataLoader context
    // in the global request context
    return {
      [EXPECTED_OPTIONS_KEY]: dataloaderContext
    };
  }
});

export default server;
