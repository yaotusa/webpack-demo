import React, { Component} from "react"
import styles from "./test.less"
import DisplayH1 from "Common/DisplayH1"
import DisplayH2 from "Common/DisplayH2"
import {join} from "lodash"

export default class Test extends Component{
    render(){
        return(
            <div className={styles.less}>
                {join(["Hello", "Less!"], " ")}
                <DisplayH1 />
                <DisplayH2 />
            </div>
        )
    }
}