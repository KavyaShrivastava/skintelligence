import React, {useState} from "react";

export const NewReply = (post_id) =>{
    const [content, setContent] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validate form
    if (!content) {
      setError("Please enter some content.");
      return;
    }

    // Send request to server
    fetch("http://127.0.0.1:8001/add_reply", {
      method: "POST",
      body: JSON.stringify({ post_id, content }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error("Failed to add reply.");
        }
        return response.json();
      })
      .then((data) => {
        setSuccess("Reply added successfully.");
        setContent(""); // Add new post to PostList
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        New Reply:
        <input
          type="text"
          value={content}
          onChange={(e) => setContent(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
      {error && <div>{error}</div>}
      {success && <div>{success}</div>}
    </form>
  );
}
