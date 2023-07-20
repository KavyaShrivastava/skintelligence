import React, { useEffect, useState } from "react";
import { Post } from "./Post";
import { NewPostForm } from "./NewPost";

export function PostList() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("http://127.0.0.1:8001/posts")
      .then((response) => response.json())
      .then((data) => setPosts(data));
  }, []);


  const addPost = (newPost) => {
    setPosts([...posts, newPost]);
  };

  return (
    <div className="post-list">
      {posts.map((post) => (
        <Post key={post.id} post={post} />
      ))}
       <NewPostForm onAddPost={addPost}/>
    </div>
  );
}

//  />