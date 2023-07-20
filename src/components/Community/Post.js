import React, {useState} from "react";
import "./Post.css";

export function Post({ post }) {
    const [showReplies, setShowReplies] = useState(false);
    const [replies, setReplies] = useState([]);
    const [loading, setLoading] = useState(false);
    const [newReplyContent, setNewReplyContent] = useState("");
  
    const toggleReplies = () => {
      if (!showReplies) {
        setLoading(true);
        fetch(`http://127.0.0.1:8001/answers/${post.id}`)
          .then((response) => response.json())
          .then((data) => {
            setReplies(data);
            setLoading(false);
            setShowReplies(true);
          });
      } else {
        setShowReplies(false);
      }
    };
  
    const handleNewReplyContentChange = (event) => {
      setNewReplyContent(event.target.value);
    };
  
    const handleNewReplySubmit = (event) => {
      event.preventDefault();
      fetch("http://127.0.0.1:8001/add_reply", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          post_id: post.id,
          content: newReplyContent,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          setNewReplyContent("");
          setReplies([...replies, data]);
        });
    };
  
    return (
      <div className="post-container">
        <p className="post-content">{post.content}</p>
        <button className="toggle-replies-button" onClick={toggleReplies}>
          {showReplies ? "Hide Replies" : `Show Replies`}
        </button>
        {showReplies && (
          <div className="replies-container">
            {loading ? (
              <p>Loading replies...</p>
            ) : replies.length === 0 ? (
              <p>No replies yet.</p>
            ) : (
              <div>
                {replies.map((reply) => (
                  <li key={reply.id}>{reply.content}</li>
                ))}
              </div>
            )}
            <form onSubmit={handleNewReplySubmit}>
              <label>
                Add a reply:
                <input
                  type="text"
                  value={newReplyContent}
                  onChange={handleNewReplyContentChange}
                />
              </label>
              <button type="submit">Submit</button>
            </form>
          </div>
        )}
      </div>
    );
  }
  