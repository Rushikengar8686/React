import React from 'react';
import newContext from './UseContext'

const DashValue = () => {
    const valueOne = React.createContext(newContext)
    console.log(valueOne.name)
    return (
        <div>
            <h2>{valueOne.name}</h2>
            
        </div>
    );
};

export default DashValue;