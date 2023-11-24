//import React from 'react';
import React, { useContext } from 'react';
import { parentContext } from './Parent1';
function Grandchild1(props) {
    let parentMsg=useContext(parentContext)
    return (
        <div>
            <p>grand child</p>
            <p>{parentMsg}</p>
        </div>
    );
}

export default Grandchild1;