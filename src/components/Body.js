import Reaction from "./Reaction.js";
import Comments from "./Comments.js";

const Body = ({ title, views, createdAt, upvotes, downvotes, comments }) => {
  return (
    <div>
      <h1>{title}</h1>
      <span>
        {views} Views | Updated {createdAt}
      </span>
      <Reaction upvotes={upvotes} downvotes={downvotes} />
      <Comments comments={comments} />
    </div>
  );
};

export default Body;
