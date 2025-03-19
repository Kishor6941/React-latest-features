import { NavLink, Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#e3f2fd",
        position: "sticky",
        top: "0",
        zIndex: "999",
      }}
    >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">
          React
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-link">
              {" "}
              <NavLink to="/">Hooks </NavLink>
            </li>{" "}
            <li className="nav-link">
              <NavLink to="form-handle">Form Handling</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="HOC">HOC</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="portal">Portal</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="render-props">Render Props</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="localization">Localization</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="redux-toolkit">Redux</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="virutalization">React Virtualized</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="react-query">React Query</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="react-testing">React Testing</NavLink>{" "}
            </li>
            <li className="nav-link">
              <NavLink to="custom-hook">customHook</NavLink>{" "}
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
