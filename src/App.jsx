import "./App.css";
import { Routes, Route } from "react-router-dom";

// Pages
import PeoplePage from "./pages/PeoplePage";
import StarshipPage from "./pages/StarshipPage";
import PlanetPage from "./pages/PlanetsPage";

// Components
import NavBar from "./components/Navbar";

function App() {

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<PeoplePage />} />
        <Route path="/ship" element={<StarshipPage />} />
        <Route path="/planet" element={<PlanetPage />} />
      </Routes>
    </>
  );
}

export default App;