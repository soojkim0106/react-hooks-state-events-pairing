import React from "react";

const CommentCard = ({ comment }) => {
  return (
    <div>
      <h1>{comment.length}</h1>
      <h3>{comment.user}</h3>
      <span>{comment.comment}</span>
    </div>
  );
};

export default CommentCard;
