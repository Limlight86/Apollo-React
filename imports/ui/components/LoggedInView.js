import React from "react";
import { ResolutionForm, Resolution } from "../../ui";

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
    <ul>
      {resolutions.map(resolution => (
        <Resolution resolution={resolution} key={resolution._id} />
      ))}
    </ul>
  </div>
);

export default LoggedInView;
