import React, { Component} from "react"

export default class Loading extends Component{
    render(){
        if (this.props.error) {
            console.error(this.props.error.message)
            // When the loader has errored
            return <div>Error! <button onClick={ this.props.retry }>Retry</button></div>
        } else if (this.props.timedOut) {
            // When the loader has taken longer than the timeout
            return <div>Taking a long time... <button onClick={ this.props.retry }>Retry</button></div>
        } else if (this.props.pastDelay) {
            // When the loader has taken longer than the delay
            return <div>Loading...</div>
        } else {
            // When the loader has just started
            return null
        }
    }
}
