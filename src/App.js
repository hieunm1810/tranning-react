import "./App.css";
import { NavLink, Outlet } from "react-router-dom";
function App() {
  return <div className="App">
    <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
      <NavLink className="navbar-brand" to="/">Cybersoft</NavLink>
      <button className="navbar-toggler d-lg-none" type="button" data-bs-toggle="collapse" data-bs-target="#collapsibleNavId" aria-controls="collapsibleNavId" aria-expanded="false" aria-label="Toggle navigation" />
      <div className="collapse navbar-collapse" id="collapsibleNavId">
        <ul className="navbar-nav me-auto mt-2 mt-lg-0">
          <li className="nav-item active">
            <NavLink style={({ isActive }) => isActive ? { borderRadius: "5px" } : {}} className={({ isActive }) => "nav-link" + (isActive ? " bg-light text-dark" : "")} to="/">Home <span className="visually-hidden">(current)</span></NavLink>
          </li>
          <li className="nav-item">
            {/* Su dung navlink de load nhanh hon, vi chi load lai 1 component do thoi, chu khong phai load lai ca trang 
              -isActive chinh la mot bien duoc destructuring cua object duoc truyen vao classname (- func) tu phia NavLink thong qua props
            */}
            <NavLink style={({ isActive }) => isActive ? { borderRadius: "5px" } : {}} className={({ isActive }) => "nav-link" + (isActive ? " bg-light text-dark" : "")} to="/about">About</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) => isActive ? { borderRadius: "5px" } : {}} className={({ isActive }) => "nav-link" + (isActive ? " bg-light text-dark" : "")} to="/contact">Contact</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) => isActive ? { borderRadius: "5px" } : {}} className={({ isActive }) => "nav-link" + (isActive ? " bg-light text-dark" : "")} to="/reactForm">React Form</NavLink>
          </li>
          <li className="nav-item">
            <NavLink style={({ isActive }) => isActive ? { borderRadius: "5px" } : {}} className={({ isActive }) => "nav-link" + (isActive ? " bg-light text-dark" : "")} to="/lifecycle">React Lifecycle</NavLink>
          </li>
          <li className="nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
              Redux
            </a>
            <ul className="dropdown-menu">
              <li><NavLink className="dropdown-item" to={"/demonumber"}>Demo number</NavLink></li>
              <li><NavLink className="dropdown-item" to={"/demochonxe"}>Demo Chọn Xe</NavLink></li>
            </ul>
          </li>


        </ul>
        <form className="d-flex my-2 my-lg-0">
          <input className="form-control me-sm-2" type="text" placeholder="Search" />
          <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
        </form>
      </div>
    </nav>

    {/* Vi tri component se duoc load o link con */}
    <Outlet />
  </div>;
}

export default App;
