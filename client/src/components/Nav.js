import React from "react";
import { Link } from "react-router-dom";
import "../styles/Nav.css";

const Nav = (props) => {
  return (
    <nav>
      <div className="nav-wrapper black">
        <Link className="nav-active brand-logo center" to="/feed">
          AJay's Imports
        </Link>
        {props.currentUser ? (
          <ul id="nav-mobile" className="right">
            <li>
              <Link
                className="nav-active"
                to="/"
                onClick={() => localStorage.clear()}
              >
                Sign Out
              </Link>
            </li>
            <li>
              <Link className="nav-active" to="/feed">
                Feed
              </Link>
            </li>
            <li>
              <Link className="nav-active" to="/profile">
                {props.currentUser.name}
              </Link>
            </li>
          </ul>
        ) : (
          <ul id="nav-mobile" className="right">
            <li>
              <Link className="nav-active" to="/login">
                Sign In
              </Link>
            </li>
            <li>
              <Link className="nav-active" to="/register">
                Sign Up
              </Link>
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Nav;
