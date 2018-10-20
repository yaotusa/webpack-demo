import React, { Component} from "react"
import "./Test.scss"
import DisplayH1 from "Common/DisplayH1"
import DisplayH2 from "Common/DisplayH2"

export default class Test extends Component{
    render(){
        let now = $.now()
        return(
            <div className="sass">
                <DisplayH1 />
                <DisplayH2 />
                <h1> {`Hello, Sass! ${now}`}</h1>
            </div>
        )
    }
}