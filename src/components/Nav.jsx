import React from "react";

const Nav = () => {
  return (
    <nav>
      <div className="nav__container">
        <a href="/">
          <img src="" alt="" className="logo" />
        </a>
        <ul className="nav__links">
          <li className="nav__list">
            <a href="" className="navlink">
              Home
            </a>
          </li>
          <li className="nav__list">
            <a href="" className="navlink">
              Books
            </a>
          </li>
          <button className="btn__menu">
            <FontAwesome icon="bars" />
          </button>
        </ul>
      </div>
    </nav>
  );
};

export default Nav;
