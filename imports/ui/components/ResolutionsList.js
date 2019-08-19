import React from "react";
import { Resolution } from "../../ui";

const ResolutionsList = ({ resolutions }) => (
  <ul>
    {resolutions.map(resolution => (
      <Resolution resolution={resolution} key={resolution._id} />
    ))}
  </ul>
);

export default ResolutionsList;
