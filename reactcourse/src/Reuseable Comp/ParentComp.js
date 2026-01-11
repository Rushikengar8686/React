import React, { useEffect, useState } from 'react';
import ChlidComp from './ChlidComp';
import axios from 'axios';

const ParentComp = () => {
    //Pass name to the chlid comp
    const firstName = "Rushikesh Kengar"

    const [cityList, setCityList] = useState(["Pune","Mumbai","Nagpur","Solapur"])
    const [selectCity,setSelectCity]  = useState("")
    
    // Task one : To select the city to show the alert pop on screen
    const onchangeEvent = (event)=>{
        setSelectCity(event.target.value)
        alert("This is my Current City is "+" "+event.target.value)
    }

    useEffect(()=>{
        getallCompanies()
    },[])
    // Simple call Employee Api
    const getallCompanies = async ()=>{
        const res = await axios.get("https://api.freeprojectapi.com/api/EmployeeOnboarding/GetCompanies")
        console.log(res.data)
    }

    return (
        <div>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h1>{<ChlidComp fName = {firstName} city = {cityList} changeEvent = {onchangeEvent}>  </ChlidComp>}</h1>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ParentComp;