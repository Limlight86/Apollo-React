import React from "react";
import { ResolutionForm, Goal, GoalForm } from "../../ui";

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
        <li key={resolution._id}>
          <span
            style={{
              textDecoration: resolution.completed ? "line-through" : "none"
            }}
          >
            {resolution.name}
          </span>
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
);

export default LoggedInView;
