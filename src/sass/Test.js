import React, { Component} from "react"
import "./test.scss"
import DisplayH1 from "Common/DisplayH1"
import DisplayH2 from "Common/DisplayH2"
import {now} from "lodash"

export default class Test extends Component{
    render(){
        let currentTime = new Date(now())
        return(
            <div styleName="sass">
                {`Hello, Sass! ${currentTime}`}
                <DisplayH1 />
                <DisplayH2 />
            </div>
        )
    }
}