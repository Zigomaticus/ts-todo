import React, { FC } from "react";
import { Link } from "react-router-dom";

const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <Link to="/" className="brand-logo">
          React + Typescript
        </Link>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <Link to="/">Todo list</Link>
          </li>
          <li>
            <Link to="/about">Informatios</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
