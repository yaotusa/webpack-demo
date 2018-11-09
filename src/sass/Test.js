import React, { Component} from "react"
import "./test.scss"
import DisplayH1 from "Common/DisplayH1"
import DisplayH2 from "Common/DisplayH2"

export default class Test extends Component{
    render(){
        let now = $.now()
        return(
            <div className="sass">
                {`Hello, Sass! ${now}`}
                <DisplayH1 />
                <DisplayH2 />
            </div>
        )
    }
}