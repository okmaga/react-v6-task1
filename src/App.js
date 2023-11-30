import {Routes, Route, NavLink, Navigate} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import Locations from "./pages/Locations";
import Episodes from "./pages/Episodes";
import SingleCharacter from "./pages/SingleCharacter";
import SingleLocation from "./pages/SingleLocation";
import SingleEpisode from "./pages/SingleEpisode";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import NavProfile from "./components/NavProfile";

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
          <li className="navbar-list-item">
            <NavProfile />
          </li>
        </ul>
      </nav>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" >
            <Route index element={<PrivateRoute><Characters /></PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><SingleCharacter /></PrivateRoute>} />
          </Route>
          <Route path="/locations" >
            <Route index element={<PrivateRoute><Locations /> </PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><SingleLocation /></PrivateRoute> } />
          </Route>
          <Route path="/episodes" >
            <Route index element={<PrivateRoute><Episodes /> </PrivateRoute>} />
            <Route path=":id" element={<PrivateRoute><SingleEpisode /></PrivateRoute>} />
          </Route>
          <Route path="/login" element={<Login />}/>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
