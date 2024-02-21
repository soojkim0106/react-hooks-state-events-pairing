import { useState } from "react";

const Comments = ({ comments }) => {
  const [hide, setHide] = useState(false);

  const toggleDetails = () => {
    setHide((hide) => !hide);
  };

  return (
    <div>
      <br></br>
      <button onClick={toggleDetails}>Hide Comments</button>
      {hide ? (
        <>
          (<h2>{comments.length} Comments</h2>
          <h3>{comments[0].user}</h3>
          <span>{comments[0].comment}</span>
          <h3>{comments[1].user}</h3>
          <span>{comments[1].comment}</span>)
        </>
      ) : null}
    </div>
  );
};

export default Comments;
