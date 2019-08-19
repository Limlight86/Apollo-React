import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import { LoggedInView, LoggedOutView } from "../../ui";

const App = ({ loading, resolutions, client, user }) => {
  if (loading) return null;
  return (
    <div>
      {user ? (
        <LoggedInView client={client} resolutions={resolutions} />
      ) : (
        <LoggedOutView client={client} />
      )}
    </div>
  );
};

const resolutionsQuery = gql`
  query Resolutions {
    resolutions {
      _id
      name
      completed
      goals {
        _id
        name
        completed
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
