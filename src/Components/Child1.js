import React, { useContext } from 'react';
import { parentContext } from './Parent1';
import Grandchild1 from './Grandchild1';
//import { useContext } from 'react';

function Child1(props) {
    let parentMsg=useContext(parentContext)
    return (
        <div>
            <h2>{parentMsg}</h2>
            <Grandchild1/>
        </div>
    );
}

export default Child1;