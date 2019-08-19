import React from "react";
import { ResolutionForm, ResolutionsList, LogoutButton } from "../../ui";

const LoggedInView = ({ client, resolutions }) => (
  <div>
    <LogoutButton client={client} />
    <ResolutionForm />
    <ResolutionsList resolutions={resolutions} />
  </div>
);

export default LoggedInView;
