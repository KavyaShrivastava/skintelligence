import React from "react";

export function Reply({ reply }) {
    return (
      <div className="reply">
        <p>{reply.text}</p>
      </div>
    );
  }