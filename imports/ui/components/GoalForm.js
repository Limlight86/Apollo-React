import React, { useRef } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createGoal = gql`
  mutation createGoal($name: String!, $resolutionId: String!) {
    createGoal(name: $name, resolutionId: $resolutionId) {
      _id
    }
  }
`;

const GoalForm = ({ createGoal, resolutionId }) => {
  const input = useRef();

  submitForm = () => {
    if (input.current.value.trim()) {
      createGoal({
        variables: {
          name: input.current.value,
          resolutionId
        }
      })
      .then(() => input.current.value = "")
      .catch(error => console.log(error));
    }
  };

  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default graphql(createGoal, {
  name: "createGoal",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(GoalForm);
