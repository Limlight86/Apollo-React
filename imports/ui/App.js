import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import GoalForm from "./GoalForm";
import ResolutionForm from "./ResolutionForm";
import RegisterForm from "./RegisterForm";
import LoginForm from "./LoginForm";
import Goal from "./resolutions/Goal";

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;
  return (
    <div>
      {user ? (
        <div>
          <button
            onClick={() => {
              Meteor.logout();
              client.resetStore();
            }}
          >
            Logout
          </button>
          <ResolutionForm />
          <ul>
            {resolutions.map(resolution => (
              <li key={resolution._id}>
                {resolution.name}
                <ul>
                  {resolution.goals.map(goal => (
                    <Goal goal={goal} key={goal._id} />
                  ))}
                </ul>
                <GoalForm resolutionId={resolution._id} />
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div>
          <RegisterForm client={client} />
          <LoginForm client={client} />
        </div>
      )}
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
      goals {
        _id
        name
      }
    }
    user {
      _id
      email
    }
  }
`;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
