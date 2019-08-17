import React, { Component } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const toggleGoal = gql`
  mutation toggleGoal($id: String!) {
    toggleGoal(_id: $id) {
      _id
    }
  }
`;

class Goal extends Component {
  toggleGoal = () => {
    this.props.toggleGoal({
      variables: {
        id: this.props.goal._id
      }
    });
  };
  render() {
    const { name, completed } = this.props.goal;
    return (
      <li>
        <input type="checkbox" onChange={this.toggleGoal} checked={completed} />
        <span style={{ textDecoration: completed ? "line-through" : 'none' }}>
          {name}
        </span>
      </li>
    );
  }
}

export default graphql(toggleGoal, {
  name: "toggleGoal",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(Goal);
