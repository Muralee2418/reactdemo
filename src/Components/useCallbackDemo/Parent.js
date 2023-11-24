import React, { useCallback } from 'react';
import { useState } from 'react';
import Child from './child';

function Parent2(props) {
    const [counter,setCounter]=useState(0)
    const [data,setData]=useState("Hello")

    let getdata=useCallback(()=>{
        return data
    },[data])
    /*
    without using useCallback() the getdata func will be created for each
    re-render. which changes the props of Child comp  and cause  re-render.
    To avoid recreation of function, useCallback is used to CACHE THE FUNCTION. it will be 
    recreated if the dependency chages

    Note: Chlid component should be wrapped with React.memo() eg:export default React.Memo(Childcomp)
    
    */
   
    return (
        <div>
            <p>{data}</p>
            <Child get={getdata}/>
            <p>{counter}</p>
            <button onClick={()=>setCounter(counter+1)}>+</button>
            <button onClick={()=>setData(data+"!")}>change data</button>
        </div>
    );
}

export default Parent2;