import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import UsersSchema from '../../api/users/User.graphql'
import ResolutionResolvers from "../../api/resolutions/resolvers";
import UsersResolvers from "../../api/users/resolvers";

const testSchema = `
type Query {
  hi: String
  resolutions: [Resolution]
  user: User
}
`;

const typeDefs = [testSchema, ResolutionsSchema, UsersSchema];

const testResolvers = {
  Query: {
    hi() {
      return "Hello Level Up";
    }
  }
};

const resolvers = merge(testResolvers, ResolutionResolvers, UsersResolvers);

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });
