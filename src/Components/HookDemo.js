import React, { useEffect, useState,useContext } from 'react';
import { Globalinfo } from '../App';
function HookDemo(props) {
    const [msg,setMsg]=useState("Hello world")
    const [counter,setcounter]=useState(0)
    let globalmsg=useContext(Globalinfo)
    console.log(globalmsg)
    
    useEffect(()=>console.log("useeffect is executed",[counter]))
    useEffect(()=>console.log("Msg is changed"),[msg])
    useEffect(()=>console.log("It is like Component didmount"),[])
    useEffect(()=>console.log("It will execute after each rendering"))
    //no params execute for each re-rendering
    //empty array- it will be executed for one time.

    useEffect(()=>console.log("Fetching server data.."),[])
    console.log("function is rendered")
    return (
        <div>
           <h2>Hook Demo</h2>
            <h3>{msg}</h3>
           <button onClick={()=>setMsg("Hi")}>change msg</button>
           <h3>{counter}</h3>
           <button onClick={()=>setcounter(counter+1)}>increment counter</button>
        </div>
    );
}

export default HookDemo;