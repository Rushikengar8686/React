import { FaMoon } from "react-icons/fa";
import DynamicCss from "./DynamicCss/DynamicCss";
import Event from "./Topics/Event";
import SetState from "./Topics/SetState";
import Variables from "./Topics/Variables";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { useState } from "react";
import Customer from "./Customer/Customer";
import ParentComp from "./Reuseable Comp/ParentComp";
import Register from "./Login/Register";
import Login from "./Login/Login";

function App() {
  const [isActive, setIsActive] = useState(false);
  const [backroundColor, setBackground] = useState(false);

  const changeBackground = () => {
    setBackground(!backroundColor);
  };

  return (
    <div style={{ backgroundColor: backroundColor ? "#6e9691" : "white" }}>
      <BrowserRouter>

        {/*NAVBAR ONLY AFTER LOGIN */}
        {!isActive && (
          <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
              <Link className="navbar-brand" to="/">Navbar</Link>

              <div className="collapse navbar-collapse">
                <ul className="navbar-nav me-auto">
                  <li className="nav-item"><Link className="nav-link" to="/variable">Variable</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/Event">Event</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/SetState">SetState</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/DynamicCss">DynamicCss</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/cutomer">Customer</Link></li>
                  <li className="nav-item"><Link className="nav-link" to="/ParentComp">ParentComp</Link></li>
                </ul>

                <button className="btn btn-outline-dark me-2" onClick={changeBackground}>
                  <FaMoon />
                </button>

                <button
                  className="btn btn-outline-danger"
                  onClick={() => setIsActive(false)}
                >
                  Logout
                </button>
              </div>
            </div>
          </nav>
        )}

        {/*  ROUTES */}
        <Routes>
          <Route path="/" element={<Register />} />
          <Route path="/login" element={<Login setIsActive={setIsActive} />} />

          <Route path="/variable" element={<Variables />} />
          <Route path="/Event" element={<Event />} />
          <Route path="/SetState" element={<SetState />} />
          <Route path="/DynamicCss" element={<DynamicCss />} />
          <Route path="/cutomer" element={<Customer />} />
          <Route path="/ParentComp" element={<ParentComp />} />
        </Routes>

      </BrowserRouter>
    </div>
  );
}

export default App;
