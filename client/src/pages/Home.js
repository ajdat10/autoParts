import React from "react";
import "../styles/Home.css";
import { Link } from "react-router-dom";
// import Nav from "../components/Nav";

const Home = (props) => {
  return (
    <div className="home">
      <div>
        <h1 className="welcome-title center">Ready To Show Off?!?!</h1>
        {!props.authenticated ? (
          <div>
            <p className="signin-signup">
              {" "}
              Welcome! In this site you will find an array of car enthusiasts
              showing off their built. You as the user can do the same! Sign in
              and show the world how amazing your car built is! Have spare
              parts? No problem. In AJay’s Imports you also can sell those parts
              that are taking up space in your garage. If you don't have an
              account don't worry this site is free to all users. Click on the
              sign up button to register.
            </p>
            <div className="buttons center">
              <Link to="/login">
                <button
                  className="btn waves-effect waves-light blue"
                  style={{ marginRight: "20px" }}
                  name="action"
                >
                  Sign in
                  <i className="material-icons right">directions_car</i>
                </button>
              </Link>

              <Link to="/register">
                <button
                  className="btn waves-effect waves-light blue"
                  to="/login"
                  name="action"
                >
                  Sign Up
                  <i className="material-icons right">directions_car</i>
                </button>
              </Link>
            </div>
          </div>
        ) : (
          <div>
            <h6 className="logged-in center">
              You are Signed in as {props.currentUser.name}
            </h6>
          </div>
        )}
      </div>
    </div>
  );
};

export default Home;
