import React, { Component} from "react"
import "./App.css"

class App extends Component{
    render(){
        let b = 3;
        let c = 2
        let a = (b * c)
        return(
            <div className="App">
                <h1> Hello, World! </h1>
                <h1> {a} </h1>
            </div>
        )
    }
}

export default App