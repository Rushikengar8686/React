import React from 'react';
import DashValue from './DashValue';
const newContext = React.createContext()

const UseContext = () => {
    const useName = {
        name:"Rushi"
    }
    return (
        
            <newContext.Provider  value = {useName}>
                <DashValue/>
            </newContext.Provider >
            
      
    );
};

export default UseContext;