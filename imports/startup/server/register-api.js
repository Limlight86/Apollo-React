import { createApolloServer } from "meteor/apollo";
import { makeExecutableSchema } from "graphql-tools";
import merge from "lodash/merge";
import ResolutionsSchema from "../../api/resolutions/Resolutions.graphql";
import UsersSchema from "../../api/users/User.graphql";
import GoalsSchema from "../../api/goals/Goal.graphql";
import ResolutionResolvers from "../../api/resolutions/resolvers";
import UsersResolvers from "../../api/users/resolvers";
import GoalsResolvers from "../../api/goals/resolvers"

const typeDefs = [GoalsSchema, ResolutionsSchema, UsersSchema ];

const resolvers = merge(GoalsResolvers, ResolutionResolvers, UsersResolvers );

const schema = makeExecutableSchema({
  typeDefs,
  resolvers
});

createApolloServer({ schema });

//123123123