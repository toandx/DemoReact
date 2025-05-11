import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div className = "container-fluid">
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link" href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="/login">Login</a>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};

export default Layout;