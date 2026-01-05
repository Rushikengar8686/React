import React, { useState } from 'react';

const Event = () => {
    // Functions
    function showAlert (){
        alert("My Noramle Funcitons")
    }

    // Arrow functions
    const showSecondAlert = () =>{
        console.log("That's my Arrow functions")
    }
    
    //Function with parameter
    const printSumOftwoNumber  = (a,b)=>{
        console.log(a+b)
    }

    //Onchange Event
    const[name,setname] = useState("")
    const printName = (event) =>{
        setname(event.target.value)
    }   


    return (
        <div>
            <div className="container">
                <div className="row mt-4">
                <div className="col-3">
                    <button type="button" className='btn btn-primary' onClick={showAlert}>show Alert</button>
                </div>
                <div className="col-3">
                    <button type="button" className='btn btn-danger' onClick={showSecondAlert}>click</button>
                </div>
                <div className="col-3">
                    <button type="button" className='btn btn-success' onClick={()=> printSumOftwoNumber(10,20)}>sum</button>

                </div>
                <div className="col-3">
                    <h5>My name is :: <span className='text-danger'>{name}</span></h5>
                    <input type="text" className='form-control' onChange={(event)=>{printName(event)}}/>
                </div>
            </div>
            </div>
            
        </div>
    );
};

export default Event;