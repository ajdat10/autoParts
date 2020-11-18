import React, { Component } from 'react'
import {Switch, withRouter,Route} from 'react-router-dom'
import Home from '../pages/Home'
import SignIn from '../pages/SignIn'
import { __CheckSession } from '../services/UserServices'
import Profile from '../pages/Profile'
import SignUp from '../pages/SignUp'
import Feed from '../pages/Feed'
import CreatePost from '../pages/CreatePost'
import Layout from '../pages/Layout'
import CreateComment from '../pages/CreateComment'


class Router extends Component {
    constructor() {
      super()
      this.state = {
        authenticated: false,
        currentUser: null,
        pageLoading: true
      }
    }
    verifyTokenValid = async () => {
    
    }
    
    toggleAuthenticated = (value, user, done) => {
      this.setState({ authenticated: value, currentUser: user }, () => done())
    }
  
    
    
    componentDidMount() {
      //invoke verifyTokenValid request
      this.verifyTokenValid()
      this.setState({ pageLoading: false })
    }
  
    verifyTokenValid = async () => {
      const token = localStorage.getItem('token')
      if (token) {
        try {
          const session = await __CheckSession()
          console.log('session', session)
          this.setState(
            {
              currentUser: session.user,
              authenticated: true
            },
            () => this.props.history.push('/profile')
          )
        } catch (error) {
          this.setState({ currentUser: null, authenticated: false })
          localStorage.clear()
        }
        // Send Api request to verify token
        // if token valid should set a user to state
      }
    }
  
    toggleAuthenticated = (value, user, done) => {
      this.setState({ authenticated: value, currentUser: user }, () => done())
    }
    render() {
        return (
          <main>
              {this.state.pageLoading ? (
              <h3>Loading...</h3>
              ) : (
                <Layout {...this.props}
                  currentUser={this.state.currentUser}
                  authenticated={this.state.authenticated}
                >
                  <Switch>
                    <Route
                      exact path="/"
                      component={(props) => (
                        <Home></Home>
                      )}
                    />
                    <Route
                      path="/login"
                      component={(props) => (
                        <SignIn
                          currentUser={this.state.currentUser}
                          authenticated={this.state.authenticated}
                          toggleAuthenticated={this.toggleAuthenticated}
                          {...props}
                        />
                      )}
                    />
                    <Route
                      path="/profile"
                      component={(props) => (
                        <Profile {...props}
                        currentUser={this.state.currentUser}/>
                      )}
                    />
                    <Route
                      path='/register'
                      component={(props) => (
                        <SignUp {...props}/>
                      )}
                    />
                    <Route
                      path="/feed"
                      component={(props) => (
                        <Feed {...props}/>
                      )}
                    />
                    <Route
                      authenticated={this.state.authenticated}
                      path="/upload"
                      component={(props) => (
                        <CreatePost
                          currentUser={this.state.currentUser}
                          authenticated={this.state.authenticated}
                          {...props} currentUser={this.state.currentUser} 
                        />                    
                      )}
                    />
                    <Route
                    path="/create"
                    component={(props) =>(
                      <CreateComment
                        currentUser={this.state.currentUser}
                      
                      />
                    )}
                    />
                  </Switch>
                </Layout>
            )}
          </main>
    )}
}
export default withRouter(Router) 