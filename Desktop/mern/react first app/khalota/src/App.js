import logo from "./logo.svg";
import "./App.css";
import Cpntone from "./Cpntone";
import Test from "./components/test/Test";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
function App() {
  const a = 10;
  return (
    <div className="App">
      <form>
        <div className="mb-3">
          <label for="exampleInputEmail1" className="form-label">
            Email address
          </label>
          <input
            type="email"
            className="form-control"
            id="exampleInputEmail1"
            aria-describedby="emailHelp"
          />
          <div id="emailHelp" className="form-text">
            "We'll never share your email with anyone else."
          </div>
        </div>
        <div className="mb-3">
          <label for="exampleInputPassword1" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="exampleInputPassword1"
          />
        </div>
        <div className="mb-3 form-check">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            Check me out
          </label>
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>

      <div className="container ">
  <div className="row walid">
    <div className="col walid">
      1 of 2
    </div>
    <div className="col walid">
      2 of 2
    </div>
  </div>
  <div className="row walid">
    <div className="col walid">
      1 of 3
    </div>
    <div className="col walid">
      2 of 3
    </div>
    <div className="col walid">
      3 of 3
    </div>
  </div>
</div>
      

      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={"/logo192.png"} />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card>
    </div>
  );
}

export default App;
