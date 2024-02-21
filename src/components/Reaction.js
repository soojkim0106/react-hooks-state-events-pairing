import { useState } from "react";

const Reaction = ({ upvotes, downvotes }) => {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);

  const onClickUpvote = () => {
    setUpvoteCount((current) => current + 1);
  };

  const onClickDownvote = () => {
    setDownvoteCount((current) => current + 1);
  };

  return (
    <div>
      <br></br>
      <button onClick={onClickUpvote}>{upvoteCount} 👍</button>
      <button onClick={onClickDownvote}>{downvoteCount} 👎</button>
    </div>
  );
};

export default Reaction;
