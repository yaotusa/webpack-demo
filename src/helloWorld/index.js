import React from "react"
import Loadable from "react-loadable"
import Loading from "Common/Loading"

const LoadableComponent = Loadable({
    loader: () => import("./HelloWorld"),
    loading: Loading
})

export default class Package extends React.Component {
    render() {
        return <LoadableComponent />
    }
}