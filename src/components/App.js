import video from "../data/video.js";
import Video from "./Video.js";
import Body from "./Body.js";

function App() {
  console.log("Here's your data:", video);

  return (
    <div className="App">
      <Video {...video} />
      <Body {...video} />
    </div>
  );
}

export default App;
