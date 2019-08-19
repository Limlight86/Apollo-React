import React, { useRef } from "react";
import gql from "graphql-tag";
import { graphql } from "react-apollo";

const createResolution = gql`
  mutation createResolution($name: String!) {
    createResolution(name: $name) {
      _id
    }
  }
`;

const ResolutionForm = ({ createResolution }) => {
  const input = useRef();

  submitForm = () => {
    createResolution({
      variables: {
        name: input.current.value
      }
    })
    .then(() => input.current.value = "")
    .catch(error => console.log(error));
  };

  return (
    <div>
      <input type="text" ref={input} />
      <button onClick={submitForm}>Submit</button>
    </div>
  );
};

export default graphql(createResolution, {
  name: "createResolution",
  options: {
    refetchQueries: ["Resolutions"]
  }
})(ResolutionForm);
