import React, { FC } from "react";

const Navbar: FC = () => {
  return (
    <nav>
      <div className="nav-wrapper purple darken-2 px1">
        <a href="/" className="brand-logo">
          React + Typescript
        </a>
        <ul id="nav-mobile" className="right hide-on-med-and-down">
          <li>
            <a href="/">Todo list</a>
          </li>
          <li>
            <a href="/">Informatios</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
