import React, { createContext, useState } from 'react';
import Child1 from './Child1';
import Child2 from './Child2';
import Child3 from './Child3';

export let parentContext=createContext()
function Parent1(props) {
    const [msg,setMsg]=useState("Welcome to accenture")

    return (
        <div>
            <parentContext.Provider value={msg}>
            <Child1/>
            <Child2/>
            <Child3/>
            <button onClick={()=>{setMsg("HelloWorld")}}>change msg</button>
            </parentContext.Provider>
        </div>
    );
}

export default Parent1;