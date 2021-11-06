import "./App.css";
import logo from "./logo512.png";
function App() {
  const a = 10;
  return (
    <div className="div">
      <div>
        <div style={{ border: "solid 1px black", maxWidth: "100vw" }}>
          <h1 className="title red">Your name here</h1>
          <br />
          <img src={logo} />
          <br />
          <img src="/mikassa.jpg" />
        </div>
        <video width={320} height={240} controls>
          <source src="#" type="video/mp4" />
        </video>
      </div>
    </div>
  );
}

export default App;
