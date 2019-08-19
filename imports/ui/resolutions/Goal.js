import React from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const toggleGoal = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
      _id
    }
  }
`;

const Goal = ({ toggleGoal, goal }) => {
  const { name, completed, _id } = goal;

  toggle = () => {
    toggleGoal({
      variables: {
        id: _id
      }
    });
  };

  return (
    <li>
      <input type="checkbox" onChange={toggle} checked={completed} />
      <span style={{ textDecoration: completed ? "line-through" : "none" }}>
        {name}
      </span>
    </li>
  );
};

export default graphql(toggleGoal, {
  name: "toggleGoal",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(Goal);
