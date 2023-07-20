import React, {useContext} from "react";
import Navbar2 from "../components/Navbar2";
import Community, { AnswerForm, Question } from "../components/Community";
import Profile from "../components/Profile";
import Dataset from "../components/AISection/DataSet";



const ProfilePage = () => {

    return (
     <>
     <Navbar2 />
      <Profile />
     </>
    );
  };

  export default ProfilePage;