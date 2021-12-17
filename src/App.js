import "./App.css";
import { Routes, Route } from "react-router-dom";
import HomePage from "./component/Home/HomePage";
import ServicesPage from "./component/Services/ServicesPage";
import Profile from "./component/Profile/Profile";
import NavBar from "./component/NavBar/NavBar";
import Marketing from "./component/Services/Marketing";
import WebDev from "./component/Services/WebDev";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/services" element={<ServicesPage />}>
          <Route path="/services/Marketing_Services" element={<Marketing />} />
          <Route path="/services/WebDev_Services" element={<WebDev />} />
        </Route>
        <Route path="/Profile/:id" element={<Profile />} />
      </Routes>
    </div>
  );
}

export default App;
