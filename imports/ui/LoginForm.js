import React, { useRef } from "react";

const LoginForm = ({ client }) => {
  email = useRef()
  password = useRef();

  login = e => {
    e.preventDefault();
    Meteor.loginWithPassword(email.current.value, password.current.value, error => {
      if (!error) {
        client.resetStore();
      }
      console.log(error);
      }
    );
  };

  return (
    <form onSubmit={login}>
      <input type="email" ref={email} />
      <input type="password" ref={password} />
      <button type="submit">Login User</button>
    </form>
  );
};

export default LoginForm;
