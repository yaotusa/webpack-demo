import React from "react"
import {Link, HashRouter as Router, Route} from "react-router-dom"

import Home from "../home"
import Package from "./Package"
import Css from "./Css"
import List from "../list"

export default class Index extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <h1>Dashboard</h1>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/packages">Packages</Link>
                        </li>
                        <li>
                            <Link to="/css">CSS</Link>
                        </li>
                        <li>
                            <Link to="/list">List</Link>
                        </li>
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/packages" component={Package}/>
                    <Route path="/css" component={Css}/>
                    <Route path="/list" component={List}/>
                </div>
            </Router>
        )
    }
}
