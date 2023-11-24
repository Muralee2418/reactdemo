import React, { useState } from 'react';

function DeliveryComp(props) {
   const [location,setLocation]=useState("Chennai")

   let handleChange=(e)=>{
    console.log(e.target.value)
    setLocation(e.target.value)
   }

    return (
        <div>
            <h4> Your product will be delivered to {location}</h4>
            <input type="text" placeholder='Enter Location' value={location} onChange={(event)=>handleChange(event)}/>
        </div>
    );
}

export default DeliveryComp;