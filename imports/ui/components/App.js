import React from "react";
import { graphql } from "react-apollo";
import { withApollo } from "react-apollo";
import { resolutionsQuery } from "../../api/queries";
import { LoggedInView, LoggedOutView } from "../../ui";

const App = ({ loading, client, resolutions, user }) => {
  if (loading) return null;
  return (
    <div>
      {user ? 
        <LoggedInView resolutions={resolutions} client={client} />
      : 
        <LoggedOutView client={client} />
      }
    </div>
  );
};

resolutionsQuery;

export default graphql(resolutionsQuery, {
  props: ({ data }) => ({ ...data })
})(withApollo(App));
