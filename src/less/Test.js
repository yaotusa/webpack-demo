import React, { Component} from "react"

export default class Test extends Component{
    render(){
        let b = 3
        let c = 2
        let a = (b * c) + "a"
        return(
            <div className="App">
                <h1> Hello, World! </h1>
                <h1> {a} </h1>
            </div>
        )
    }
}