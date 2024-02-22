import { useState } from "react";
import CommentCard from "./CommentCard";

const Comments = ({ comments }) => {
  const [hide, setHide] = useState(false);

  const toggleDetails = () => {
    setHide((hide) => !hide);
  };

  const mappedComments = comments.map((comment) => (
    <CommentCard key={comments.id} comment={comment} />
  ));

  return (
    <div>
      <br></br>
      <button onClick={toggleDetails}>Hide Comments</button>
      <hr></hr>
      {hide ? (
        <>
          <h2>{comments.length} Comments</h2>
          {mappedComments}
        </>
      ) : null}
    </div>
  );
};

export default Comments;
