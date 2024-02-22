import { useState } from "react";

const Reaction = ({ upvotes, downvotes }) => {
  const [upvoteCount, setUpvoteCount] = useState(upvotes);
  const [downvoteCount, setDownvoteCount] = useState(downvotes);

  //   const handleClick = (e) => {
  //     if (e.target.name === "upvote") {
  //       return setUpvoteCount((current) => current + 1);
  //     } else {
  //       return setDownvoteCount((current) => current + 1);
  //     }
  //   };

  const handleClick = (e) =>
    e.target.name === "upvote"
      ? setUpvoteCount((current) => current + 1)
      : setDownvoteCount((current) => current + 1);

  return (
    <div className="reactions-btn" onClick={handleClick}>
      <br></br>
      <button name="upvote">{upvoteCount} 👍</button>
      <button name="downvote">{downvoteCount} 👎</button>
    </div>
  );
};

export default Reaction;
