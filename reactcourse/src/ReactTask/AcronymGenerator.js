import React, { useState } from 'react';

const AcronymGenerator = () => {
    const [value,setValue] = useState("")
    const [output,setOutput] = useState("")

    const genreateShort = (text)=>{
        const result = text.split(" ").map((m)=> m[0].toUpperCase()).join(" ")
        setOutput(result)
    }
    return (
        <div>
            <div className="container">
                <div className="row  mt-3 text-center">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-header">
                                <h1>Acronym Generator</h1>
                            </div>
                            <div className="card-body">
                                <p>An acronym is formed by taking the first letter of each word in a phrase and converting them to uppercase.</p>
                                <div className="row">
                                    <div className="col-10">
                                        <input type="text" className='form-control' value = {value} onChange={(e)=> {setValue(e.target.value)}} />
                                    </div>
                                    <div className="col-2">
                                        <button className='btn btn-success' onClick={()=>{genreateShort(value)}}>Genreate</button>
                                    </div>
                                </div>
                                <h6 className='mt-4'>Result :{output} </h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AcronymGenerator;