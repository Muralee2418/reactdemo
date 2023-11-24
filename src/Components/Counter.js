import { useState } from "react"
function Counter(props){
    const [counter,setCounter]=useState(0)
    
    //let [num1,num2]=getNumbers()

    let incm=()=>
    {
       if(counter<props.max)
       {
        setCounter(counter+1)
       }
        
    }

    let dec=()=>{
        if(counter>=props.min)
        {
            setCounter(counter-1)
        }
    }
    return(
        <div>
             <button onClick={dec}>-</button>
            <h1>{counter}</h1>
            <button onClick={incm}>+</button>
        </div>
    )
}

export default Counter