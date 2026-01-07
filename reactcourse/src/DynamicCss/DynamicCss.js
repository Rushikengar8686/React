import React, { useState } from 'react';

const DynamicCss = () => {
    // Task:
    // Create a button that changes Div  background color when clicked. 
    // Clicking again should revert it to the original color.
    const [newbackgroundColor,setnewBackground] = useState(false)
    const changeBackgroundToGreen =()=>{
        setnewBackground(!newbackgroundColor)
    }

    // ADD DYNAMIC CLASSNAME 
    const [className,setClassName]  = useState('')

    const addClasNAme = (className) =>{
        setClassName(className)
    }


    return (
        <div>
            <div className="container">
                <div className="row  mt-2">
                    <div className="col-12" onMouseEnter={changeBackgroundToGreen} style={{backgroundColor:newbackgroundColor ? "Red":"Blue","height":"100px"}}>
                      <h5>Div-1</h5>
                    </div>
                    <button type="button" className='btn btn-info' onClick={changeBackgroundToGreen}>click</button>
                </div>
                <div className="row mt-5">
                    <div className={`col-6 ${className}`}>
                        <h5>ADD BG CLASS</h5>
                    </div>
                    <button type="button" className="btn btn-outline-info" onClick={()=> {addClasNAme("text-primary")}}>add class</button>

                </div>
            </div>
        </div>
    );
};


export default DynamicCss;