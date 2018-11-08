import React from "react"
import {Link, Route} from "react-router-dom"
import HelloWord from "../helloWord"

export default class Package extends React.Component {
    render() {
        let match = this.props.match

        return (
            <div>
                <h2>Packages</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/helloWord`}>我的第一个package包</Link>
                    </li>
                </ul>

                <Route path={`${match.path}/:packageId`} component={SubPackage}/>
                <Route
                    exact
                    path={match.path}
                    render={() => <h3>Please select a package.</h3>}
                />
            </div>
        )
    }
}

class SubPackage extends React.Component {
    render() {
        let {packageId} = this.props.match.params

        let component = null
        switch (packageId) {
        case "helloWord":
            component = <HelloWord/>
            break
        default:
            break
        }

        return component
    }
}