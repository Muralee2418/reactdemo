import React, { useMemo, useState } from 'react';

function UseMemo(props) {
const [msg,setMsg]=useState("Hello")
const [counter,setCounter]=useState(0)
const [fh,setFh]=useState(0)


let expensiveFunction=useMemo(()=>{
    console.log("Executing expensive task")
},[counter])

let handleChange=(e)=>
{
setFh(parseInt(e.target.value))
}

let fh_to_cel=useMemo(()=>{
let c=(5/9)*(fh-32)
console.log(c)
return c

},[fh])

/*
    useMemo is used to prevent function execution for each re-renders

    - in this example the conver_to_celsius func should execute only if 
      faranheit changes.Not for counter changes.
    - to do that pass the function to useMemo()with dependecy param.
     - It helps to prevent execution of expensive functions for each
       re-rendering.

    */

    return (
        <div>
            <h2>{msg}</h2>
            <h2>{counter}</h2>
            <input type='text' onChange={(e)=>handleChange(e)}/> 
            {fh_to_cel}
            <button onClick={()=>setMsg(msg+"!")}>change msg</button>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            {expensiveFunction}
           
            
        </div>
    );
}

export default UseMemo;