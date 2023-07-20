
import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import Navbar2 from "./Navbar2";
import { useContext } from "react";


const Profile = () => {
        const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }
  console.log(isAuthenticated)

  return (
    isAuthenticated && (
      <div>
        <h2>{user.name}</h2>
      </div>
    )
  );
};

export default Profile;