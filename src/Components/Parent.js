import React, { useState } from 'react';
import Child from './Child';

function Parent(props) {

    const [msg,setMsg]=useState("")

    //props.setGrandparent(msg)
    return (
        <div>
            <h1>Inside parent: {msg}</h1>
            <Child info={msg} setInfo={setMsg}/>
        </div>
    );
}

export default Parent;