import React from "react"
import {Link, Route} from "react-router-dom"
import HelloWorld from "../helloWorld"

export default class Package extends React.Component {
    render() {
        let match = this.props.match

        return (
            <div>
                <h2>Packages</h2>
                <ul>
                    <li>
                        <Link to={`${match.url}/helloWorld`}>My first helloworld react package</Link>
                    </li>
                </ul>
                <hr/>
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
        case "helloWorld":
            component = <HelloWorld/>
            break
        default:
            break
        }

        return component
    }
}