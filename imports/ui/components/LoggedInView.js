import React from "react";
import { ResolutionForm, ResolutionsList } from "../../ui";

const LoggedInView = ({ client, resolutions }) => (
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
    <ResolutionsList resolutions={resolutions} />
  </div>
);

export default LoggedInView;
