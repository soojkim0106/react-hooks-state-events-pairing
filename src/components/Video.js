import React from "react";

const Video = ({ embedUrl }) => {
  return (
    <div className="App">
      <iframe
        width="919"
        height="525"
        src={embedUrl}
        frameBorder="0"
        allowFullScreen
        title="Thinking in React"
      />
    </div>
  );
};

export default Video;
