import React, { useState } from 'react';
import { BaseCounter } from './BaseCounter';

function CityList(props) {
    const [citylist,setCityList]=useState(["mumbai","delhi","goa","chennai"])
    return (
        <div>
            <button onClick={props.inc}  >{'<'}</button>
            <span className='h3 w-40'>{citylist[props.index]}</span>
            <button onClick={props.dec} >{'>'}</button>
        </div>
    );
}

export default BaseCounter(CityList);