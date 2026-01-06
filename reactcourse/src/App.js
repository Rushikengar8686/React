import Event from "./Topics/Event";
import SetState from "./Topics/SetState";
import Variables from "./Topics/Variables";
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
function App() {
  return (
    <div>
      <div className="container">
        <BrowserRouter>
          <nav className="navbar navbar-expand-lg navbar-light bg-info">
            <div className="container-fluid">
              <a className="navbar-brand" href="#">Navbar</a>
              <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
              </button>
              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                    <Link className="nav-link active" to="/">Vairable</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" to="Event">Event</Link>
                   </li>
                   <li className="nav-item">
                    <Link className="nav-link active" to="SetState">Set-State</Link>
                   </li>
                </ul>
                <form className="d-flex">
                  <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                  <button className="btn btn-outline-secondary" type="submit">Search</button>
                </form>
              </div>
            </div>
          </nav>
          <Routes>
            <Route path="/" element={<Variables></Variables>}></Route>
            <Route path="Event" element={<Event></Event>}></Route>
            <Route path="SetState" element={<SetState></SetState>}></Route>

          </Routes>
        </BrowserRouter>
      </div>
      {/* <div classNameName="container">
        <div classNameName="row">
          <div classNameName="col text-center">
            <span classNameName="text-danger">-------------------------------------Variable Topic--------------------------------------</span>

            <Variables></Variables>
          </div>
        </div>

        <div classNameName="row">
          <div classNameName="col text-center">
            <span classNameName="text-danger">-------------------------------------Event Topic--------------------------------------</span>

            <Event></Event>
          </div>
        </div>
        <div classNameName="row">
          <div classNameName="col text-center">
            <span classNameName="text-danger">-------------------------------------Set State--------------------------------------</span>
            <SetState></SetState>
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
