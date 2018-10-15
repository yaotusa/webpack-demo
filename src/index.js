import React from "react"
import ReactDOM from "react-dom"
import {BrowserRouter as Router, Route, Link} from "react-router-dom"
import Less from "./less"
import Sass from "./sass"
import PostCSS from "./postcss"
import First from "./first"

const Index = () => (
    <Router>
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/about">About</Link>
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
            <Route path="/about" component={About}/>
            <Route path="/packages" component={Packages}/>
            <Route path="/css" component={CSS}/>
        </div>
    </Router>
)

const Home = () => (
    <div>
        <h2>Home</h2>
    </div>
)


const About = () => (
    <div>
        <h2>About</h2>
    </div>
)

const Packages = ({match}) => (
    <div>
        <h2>Packages</h2>
        <ul>
            <li>
                <Link to={`${match.url}/first`}>我的第一个package包</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:packageId`} component={Package}/>
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a package.</h3>}
        />
    </div>
)

class Package extends React.Component {
    render() {
        
        let {packageId} = this.props.match.params
        if (packageId === "first") {
            return <First/>
        }
    }
}

const CSS = ({match}) => (
    <div>
        <h2>CSS</h2>
        <ul>
            <li>
                <Link to={`${match.url}/less`}>Less</Link>
            </li>
            <li>
                <Link to={`${match.url}/sass`}>Sass</Link>
            </li>
            <li>
                <Link to={`${match.url}/postcss`}>PostCSS</Link>
            </li>
        </ul>

        <Route path={`${match.path}/:cssType`} component={CSS2}/>
        <Route
            exact
            path={match.path}
            render={() => <h3>Please select a CSS Type.</h3>}
        />
    </div>
)

class CSS2 extends React.Component {
    render() {
        let {cssType} = this.props.match.params
        if (cssType === "less") {
            return <Less/>
        } else if (cssType === "sass") {
            return <Sass/>
        } else if (cssType === "postcss") {
            return <PostCSS/>
        }
    }
}

ReactDOM.render(<Index/>, document.getElementById("root"))