import React, { Component} from "react"
import "./Test.css"
import DisplayH1 from "Common/DisplayH1"
import DisplayH2 from "Common/DisplayH2"

export default class Test extends Component{
    render(){
        return(
            <div className="less">
                <DisplayH1 />
                <DisplayH2 />
                <input type={"input"} placeholder={"请输入"} maxLength={10}/>
            </div>
        )
    }
}