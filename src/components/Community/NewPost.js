import React, { useState , useEffect} from "react";

export function NewPostForm({ onAddPost }) {
  const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [newPost, setNewPost] = useState(null);

  useEffect(() => {
    if (newPost) {
      onAddPost(newPost);
    }
  }, [newPost, onAddPost]);


  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!content) {
      setError("Please enter some content.");
      return;
    }

    // Send request to server
    fetch("http://127.0.0.1:8001/add_post", {
      method: "POST",
      body: JSON.stringify({ content }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
        }
        return response.json();
      })
      .then((data) => {
        setSuccess("Post added successfully.");
        setContent("");
        onAddPost(data); // Add new post to PostList
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Post:
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
      {success && <div>{success}</div>}
    </form>
  );
}

