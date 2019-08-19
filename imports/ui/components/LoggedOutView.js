import React from "react";
import { RegisterForm, LoginForm } from "../../ui";

const LoggedOutView = ({ client }) => (
  <div>
    <RegisterForm client={client} />
    <LoginForm client={client} />
  </div>
);

export default LoggedOutView;
