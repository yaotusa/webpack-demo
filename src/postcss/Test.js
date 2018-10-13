import React, { Component} from "react"
import "./Test.css"

export default class Test extends Component{
    render(){
        return(
            <div className="less">
                <input type={"input"} placeholder={"请输入"} maxLength={10}/>
            </div>
        )
    }
}