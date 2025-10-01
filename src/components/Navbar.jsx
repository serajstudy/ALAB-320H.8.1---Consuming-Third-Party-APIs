import { Link } from "react-router-dom";
import style from "./Nav.module.css";

export default function NavBar() {
  return (
    <nav className={style.nav}>
      <Link to={"/"}>
        <h2>People</h2>
      </Link>
      <Link to={"/ship"}>
        <h2>Starships</h2>
      </Link>
      <Link to={"/planet"}>
        <h2>Planets</h2>
      </Link>
    </nav>
  );
}

// Get data from api
// save data to state
//map over data to display