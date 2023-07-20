import React from "react";
import Navbar2 from "../components/Navbar2";
import Community, { AnswerForm, Question } from "../components/Community";
import { PostList } from "../components/Community/PostList";
import { NewPostForm } from "../components/Community/NewPost";

const CommunityPage = () => {
    return (
     <>
     <Navbar2 />
     <PostList />
    
     </>
    );
  };

  export default CommunityPage;
  