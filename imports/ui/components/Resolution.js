import React from "react";
import { Goal, GoalForm } from "../../ui";

const Resolution = ({ resolution }) => (
  <li>
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
);

export default Resolution;
