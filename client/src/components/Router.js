import React, { Component } from "react";
import { Switch, withRouter, Route } from "react-router-dom";
import Home from "../pages/Home";
import SignIn from "../pages/SignIn";
import { __CheckSession } from "../services/UserServices";
import Profile from "../pages/Profile";
import SignUp from "../pages/SignUp";
import Feed from "../pages/Feed";
import CreatePost from "../pages/CreatePost";
import Layout from "./Layout";
import CreateComment from "../pages/CreateComment";
import ProtectedRoute from "./ProtectedRoute";
import LandingPage from "../pages/LandingPage";

class Router extends Component {
  constructor() {
    super();
    this.state = {
      authenticated: false,
      currentUser: null,
      pageLoading: true,
    };
  }

  componentDidMount() {
    //invoke verifyTokenValid request
    this.verifyTokenValid();
    this.setState({ pageLoading: false });
  }

  verifyTokenValid = async () => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const session = await __CheckSession();
        console.log("session", session);
        this.setState(
          {
            currentUser: session.user,
            authenticated: true,
          },
          () => this.props.history.push("/profile")
        );
      } catch (error) {
        this.setState({ currentUser: null, authenticated: false });
        localStorage.clear();
      }
      // Send Api request to verify token
      // if token valid should set a user to state
    }
  };

  toggleAuthenticated = (value, user, done) => {
    this.setState({ authenticated: value, currentUser: user }, () => done());
  };
  render() {
    return (
      <main>
        {this.state.pageLoading ? (
          <h3>Loading...</h3>
        ) : (
          <Switch>
            <Route
              exact
              path="/"
                component={() => (
                <LandingPage>
                  <Home
                  // currentUser={this.state.currentUser}
                  // authenticated={this.state.authenticated}
                  // toggleAuthenticated={this.toggleAuthenticated}
                  />
                </LandingPage>
              )}
            />
            <Route
              path="/login"
              component={(props) => (
                <LandingPage>
                  <SignIn
                    toggleAuthenticated={this.toggleAuthenticated}
                    {...props}
                  />
                </LandingPage>
              )}
            />
            <Route
              path="/register"
                component={(props) => (
                  <LandingPage>
                    <SignUp {...props} />
                  </LandingPage>
                )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/profile"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <Profile {...props} currentUser={this.state.currentUser} />
                </Layout>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/feed"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <Feed {...props} currentUser={this.state.currentUser} />
                </Layout>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/upload"
              component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <CreatePost
                    currentUser={this.state.currentUser}
                    {...props}
                    // currentUser={this.state.currentUser}
                  />
                </Layout>
              )}
            />
            <ProtectedRoute
              authenticated={this.state.authenticated}
              path="/create"
                component={(props) => (
                <Layout
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                    <CreateComment currentUser={this.state.currentUser} {...props}/>
                </Layout>

                
              )}
            />
          </Switch>
        )}
      </main>
    );
  }
}
export default withRouter(Router);
