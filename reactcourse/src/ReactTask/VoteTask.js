import React, { useState } from 'react';

const VoteTask = () => {
    const [TextInputValue,setTextInputValue] = useState(0)
    const [showValue,SetShoeValue] = useState(0)

    const checkPersonEligible = ()=>{
       const result = parseInt(TextInputValue) 
       SetShoeValue(result)
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center mt-3">
                    <div className="col-6">
                        <div className="card">
                            <div className="card-header">
                                <h5 className=' text-center'>Count String Vowel</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <p className='text-center'>You are given a integer age representing the age of person your task is to determined whether the person is eligible to vote or not a person is eligible to vote if there is 18 years or older write a program to check this condition and returns eligible to vote if the age is 18 or above not eligible vote if the age is below 18</p>

                                    <div className="col-10">
                                         <input type="text"  className='form-control' placeholder='Enter Any String' onChange={(e)=> setTextInputValue(e.target.value)}/>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className='btn btn-success' onClick={checkPersonEligible}>Check</button>
                                    </div>
                                </div>
                            </div>
                            {
                               showValue > 18 ? <h2 className='text-danger text-center'>Eligible To Vote</h2> :<h2 className='text-danger text-center'>Not Eligible To Vote</h2> 

                            } 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default VoteTask;