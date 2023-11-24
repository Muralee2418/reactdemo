import React, { useRef, useState } from 'react';

function UseRefDemo(props) {
    let counter=useRef(0)
    console.log("REndered..")
  
    return (
        <div>
           
            <button onClick={()=>{counter.current=counter.current+1; console.log(counter.current)}}>+</button>
        </div>
    );
}

export default UseRefDemo;