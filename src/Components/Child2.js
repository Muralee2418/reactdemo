import React from 'react';
import { parentContext } from './Parent1';
import { useContext } from 'react';

function Child2(props) {
    let parentMsg=useContext(parentContext)
    return (
        <div>
            <h2>{parentMsg}</h2>
        </div>
    );
}

export default Child2;