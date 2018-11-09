import React from "react"
import Less from "../less"
import Sass from "../sass"
import PostCSS from "../postcss"
import {Link, Route} from "react-router-dom"

export default class Css extends React.Component {
    render() {
        let match = this.props.match

        return (
            <div>
                <h2>Css</h2>
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
                <hr/>
                <Route path={`${match.path}/:cssType`} component={SubCss}/>
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a CSS Type.</h3>}
                />
            </div>
        )
    }
}

class SubCss extends React.Component {
    render() {
        let {cssType} = this.props.match.params

        let component = null
        switch (cssType) {
        case "less":
            component = <Less/>
            break
        case "sass":
            component = <Sass/>
            break
        case "postcss":
            component = <PostCSS/>
            break
        default:
            break
        }

        return component
    }
}