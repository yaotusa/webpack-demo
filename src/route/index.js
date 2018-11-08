import React from "react"
import {Link, MemoryRouter as Router, Route} from "react-router-dom"

import Home from "../home"
import Package from "./Package"
import Css from "./Css"

export default class Index extends React.Component {
    render() {
        return (
            <Router>
                <div>
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
                    </ul>
                    <hr/>
                    <Route exact path="/" component={Home}/>
                    <Route path="/packages" component={Package}/>
                    <Route path="/css" component={Css}/>
                </div>
            </Router>
        )
    }
}
