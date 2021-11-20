import "./App.css";
import OUR_CMPNT from "./component/OUR_CMPNT";
import data from "./data.json";
import Help from "./component/Help";
import Profile from "./Profile/Profile";

function App() {
  const name = "CHEBBAB Walid";
  const handleName_func = (name) => {
    alert(name);
  };

  const principle_div = {
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  };
  const bio =
    "hi ! my name is walid chebbab , i am a third year computer science student at Université des Sciences et de la Technologie Houari Boumediene . I'm so obsessed with everything related to programming,coding ,especially web and mobile development , this is about the education field , From the other side i like practicing sports and doing design (graphic design and UI design ), and i spend most of my time learning and practicing these things. I read some manga and watch animes in addition to playing some video games as a distraction.";
  return (
    <div style={principle_div} className="div">
      <Profile
        fullName={name}
        bio={bio}
        Profession="software enginner"
        handleName={handleName_func}
      >
        <img src="./images/shortly.svg" alt="" />
      </Profile>
    </div>
  );
}

export default App;
