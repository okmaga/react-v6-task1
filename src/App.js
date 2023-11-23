import {Routes, Route, NavLink} from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <nav className="navbar">
        <ul className="navbar-list">
          <li className="navbar-list-item"><NavLink to="/"/>Home</li>
          <li className="navbar-list-item"><NavLink to="/characters"/>Characters</li>
          <li className="navbar-list-item"><NavLink to="/locations"/>Locations</li>
          <li className="navbar-list-item"><NavLink to="/episodes"/>Episodes</li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </>
  );
}

export default App;
