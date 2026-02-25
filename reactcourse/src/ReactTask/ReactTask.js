import React from 'react';
import { Outlet } from 'react-router-dom';

const ReactTask = () => {
    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        
                        <Outlet></Outlet>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default ReactTask;