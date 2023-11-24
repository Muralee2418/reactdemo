import React from 'react';
import { BaseCompent } from './hoc';

function OrginalComp(props) {
    return (
        <div>
            <h1>Original component</h1>
        </div>
    );
}

export default BaseCompent(OrginalComp);
//export default EnhancedComp with additional logic