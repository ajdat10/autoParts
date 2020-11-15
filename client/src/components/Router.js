import React, { Component } from 'react'
import {Switch, Route} from 'react-router-dom'
import Home from '../pages/Home'
class Router extends Component {
    constructor() {
      super()
      this.state = {
        pageLoading: true
      }
    }
componentDidMount() {
    this.setState({pageLoading: false})
}
    render() {
        return (
            <main>
                {this.state.pageLoading ? (
                <h3>Loading...</h3>
                ) : (
                <Switch>
                    <Route
                        exact path="/"
                        component={(props) => (
                            <Home></Home>
                        )}
                    />
                </Switch>
            )}
            </main>
    )
  }
}
export default Router