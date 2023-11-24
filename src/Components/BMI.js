import React, { useRef } from 'react';

function BMI(props) {
    let h=useRef(0)
    let w=useRef(0)
    
    let handleSubmit=(e)=>{
        console.log(h.current.value+" "+w.current.value)
        let bmi=w.current.value/(h.current.value*h.current.value)
        alert("your bmi is:"+bmi)
        e.preventDefault()

    }
    return (
        <div>
            <form onSubmit={(e)=>handleSubmit(e)}>
            <input type='text' placeholder='height' ref={h}/>
            <input type='text' placeholder='weight' ref={w}/>
            <input type='submit' value='submit'/>
            </form>
            
        </div>
    );
}

export default BMI;