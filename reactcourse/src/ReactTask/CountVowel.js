import React, { useState } from 'react';

const CountVowel = () => {
    const [textInputValue,setTextInputValue] = useState("")
    const [stringCount,setStringCount] = useState(0)
    const countString = ()=>{
        const vowel = ["a","e","i","o","u","A","E","I","O","u"]
        const result = textInputValue.split("").filter((m)=> vowel.includes(m)).length
        setStringCount(result)
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
                                    <p className='text-center'> Write a function count to Vowels that take a string as a input and return the number of in that string vowels include both lowercase and uppercase characters ["a","e","i","o","u","A","E","I","O","u"]</p>

                                    <div className="col-10">
                                         <input type="text"  className='form-control' placeholder='Enter Any String' onChange={(e)=> setTextInputValue(e.target.value)}/>
                                    </div>
                                    <div className="col-2">
                                        <button type="button" className='btn btn-success' onClick={countString}>Count</button>
                                    </div>
                                </div>
                            </div>
                            <h6 className='text-center mt-3'>Disply String Count :: <h2 className='text-danger'>{stringCount}</h2></h6>
                        </div>
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default CountVowel;