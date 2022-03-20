import { Outlet, Link } from "react-router-dom";

export function Nav(){
  return (
    <div id="nav-bar">
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/About">About</Link>
          </li>
          <li>
            <Link to="/Jobs">Jobs</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
};