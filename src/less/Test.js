import React, { Component} from "react"
import "./test.less"
import DisplayH1 from "Common/DisplayH1"
import DisplayH2 from "Common/DisplayH2"
import {join} from "lodash"

export default class Test extends Component{
    render(){
        return(
            <div className="less">
                {join(["Hello", "Less!"], " ")}
                <DisplayH1 />
                <DisplayH2 />
            </div>
        )
    }
}