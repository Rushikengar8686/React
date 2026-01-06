import React, { use, useState } from 'react';

const SetState = () => {
    //create Student Information 
    const[studentInfo,setStudentInfo] = useState({StudeName:"",Mark:"",Grade:"" })
    // First way to acces value in input box and append to object
    // const onchangeStudentName = (event)=>{
    //     setStudentInfo(prevObject => ({...prevObject,StudeName:event.target.value}))
    // }
    // const onchageStudentMark = (event)=>{
    //         setStudentInfo(prevObject =>({...prevObject,Mark:event.target.value}))
    // }
    // const onchageStudentGrade  = (event)=>{
    //     setStudentInfo(prevObjetct =>({...prevObjetct,Grade:event.target.value}))
    // }

    // Now second way
    const onchageStudentInfo = (event,key)=>{
        setStudentInfo(prevObject =>({...prevObject,[key]:event.target.value}))
    }

    // Now if we want to add city in arrayList 
    const [cityList,setCityList] = useState(["Pune","Mumbai"])
    
    // to hold input textbox value in this variable
    const [cityName,setCityName]  = useState([])
    
    const printCityName = (event)=>{
        setCityName(event.target.value)
    }


    // add More City in array
    const addCity = ()=>{
        setCityList(prevObject => [...prevObject,cityName])
        setCityName()
    }
    return (
        <div>
            <div className="container">
                <h5 className='text-center'>Task First</h5>
                {/* <div className="row">
                    <div className="col-3">
                        <input type="text" className='form-control' onChange={(event)=> {onchangeStudentName(event)}} placeholder='Enter Student Name' />
                    </div>
                     <div className="col-3">
                        <input type="text" className='form-control' onChange={(event)=> {onchageStudentMark(event)}} placeholder='Enter Student Mark' />
                    </div>
                     <div className="col-3">
                        <input type="text" className='form-control' onChange={(event)=> {onchageStudentGrade(event)}} placeholder='Enter Student Grade' />
                    </div>
                </div> */}
                 <div className="row">
                    <div className="col-3">
                        <input type="text" className='form-control'onChange={(event)=>{onchageStudentInfo(event,"StudeName")}} placeholder='Enter Student Name' />
                    </div>
                     <div className="col-3">
                        <input type="text" className='form-control' onChange={(event)=>{onchageStudentInfo(event,"Mark")}} placeholder='Enter Student Mark' />
                    </div>
                     <div className="col-3">
                        <input type="text" className='form-control' onChange={(event)=>{onchageStudentInfo(event,"Grade")}} placeholder='Enter Student Grade' />
                    </div>
                     <div className="col-3">
                        <button type="button" className='btn btn-primary'>Save</button>
                    </div>
                </div>
                <div className="row mt-3">
                    <h5>Task Second</h5>
                    <div className="col-4">
                        <input type="text" name="" id=""  onChange={(event)=>{printCityName(event)}} className='form-control' placeholder='Enter City Name'/>
                    </div>
                    <div className="col-4">
                        <button type="button" className='btn btn-success' onClick={addCity}>Add City</button>
                    </div>
                    <div className="col-4">
                       {cityList.map((item)=> <h2>{item}</h2>
                    )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SetState;