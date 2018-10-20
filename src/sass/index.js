import React from "react"
import Loadable from "react-loadable"
import Loading from "Common/Loading"

const LoadableComponent = Loadable({
    loader: () => import("./Test"),
    loading: Loading
})

export default class SaSS extends React.Component {
    render() {
        return <LoadableComponent />
    }
}