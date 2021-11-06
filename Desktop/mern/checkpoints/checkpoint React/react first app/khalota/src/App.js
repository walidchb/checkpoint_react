import "./App.css";
import Adress from "./components/Profile/Adress";
import FullName from "./components/Profile/FullName";
import ProfilePhoto from "./components/Profile/ProfilePhoto";
import Couverture from "./components/Profile/Couverture";

function App() {
  const a = 10;
  return (
    <div className="div">
      <Couverture />
      <ProfilePhoto />
      <FullName />
      <Adress />
    </div>
  );
}

export default App;
