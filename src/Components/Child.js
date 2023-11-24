import React from 'react';

function Child(props) {

    let handleChange=(e)=>{
      props.setInfo(e.target.value) 
    }
    //------

    return (
        <div>
            <input type="text" onChange={(e)=>handleChange(e)}/>
        </div>
    );
    //---
}

export default Child;