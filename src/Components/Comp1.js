//import { Component } from "react";
import React from "react";
import styles from "./Comp1.module.css"
//import "./Comp1.css"
function Comp1(props)
//props={info:"hello co2",day:"friday"}

{
    return(
        <div className={styles.primary}>
            <h1>hello world</h1>
            <h1> {props.info} {props.day}</h1>
            
        </div>
    )
}

export default Comp1

//