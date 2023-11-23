import {Routes, Route, NavLink, Navigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import SingleCharacter from "./pages/SingleCharacter";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item">
            <NavLink to="/">Home</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/characters">Characters</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/locations">Locations</NavLink>
          </li>
          <li className="navbar-list-item">
            <NavLink to="/episodes">Episodes</NavLink>
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" >
            <Route index element={<Characters />} />
            <Route path=":id" element={<SingleCharacter />} />
          </Route>
          <Route path="/locations" element={<Locations />} />
          <Route path="/episodes" element={<Episodes />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
