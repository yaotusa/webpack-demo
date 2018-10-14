import React, { Component} from "react"
import "./Test.less"
import DisplayH1 from "Common/DisplayH1"
import DisplayH2 from "Common/DisplayH2"

export default class Test extends Component{
    render(){
        return(
            <div className="less">
                <DisplayH1 />
                <DisplayH2 />
                <h1> Hello, Less! </h1>
            </div>
        )
    }
}