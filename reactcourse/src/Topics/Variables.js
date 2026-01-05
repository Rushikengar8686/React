import React, { useState } from "react";

const Variables = () => {
    // if we want to declear vairbale but cant change the value
    let studentName = "Rushikesh";
    const studentAgr = 23;
    //if we want to change varibel value so you can use setmethod
    const [name, setName] = useState("Rushikesh");
    const [age, setAge] = useState(25);
    const [isActive, setIsActive] = useState(false);
    const [cityName, setCityName] = useState(["Pune", "Mumbai", "Solapur"]);
    const [studentInfo, setStudentInfo] = useState({ name: "Rushi", Age: 23 });
    const [empInfo, setEmpInfo] = useState([
        { name: "Rushi", role: "React.js", location: "Pune" },
        { name: "Ram", role: "Python Developer", location: "Mumbai" },
        { name: "Ranjit", role: "Mern Stack Developer", location: "Nagpur" },
        { name: "Rohit", role: "AI Promt Engineer", location: "Pune" },
    ]);
    return <div>
        <div className="contanier">
            <div className="row">
                <div className="col-3">
                    <h1>{studentName}</h1>
                </div>
                <div className="col">
                <h2>{age}</h2>
                </div>
            </div>
        </div>
    </div>;
};

export default Variables;
