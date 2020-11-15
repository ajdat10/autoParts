import React, {Component} from 'react'
import {Switch, Route, withRouter} from 'react-router-dom'
import Layout from './Layout'
import Home from '../pages/Home'
class Router extends Component {
    constructor(){
        super()
    }
    render(){
        return(
            <div>
                <Route 
                exact path = "/"
                component={() => (
                    <Layout>
                       
                    </Layout>
                )} />
            </div>
        )
    }
}

export default Router