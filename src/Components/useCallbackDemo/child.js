import React from 'react';

function Child(props) {
    console.log("Child rendered")

    return (
        <div>
            {props.get}
        </div>
    );
}

export default React.memo(Child);