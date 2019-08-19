import React from "react";

const LogoutButton = ({ client }) => (
  <button
    onClick={() => {
      Meteor.logout();
      client.resetStore();
    }}
  >
    Logout
  </button>
);

export default LogoutButton;
