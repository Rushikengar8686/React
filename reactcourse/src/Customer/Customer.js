import axios from 'axios';
import React, { useEffect, useState } from 'react';

const Customer = () => {
    let [getAllUsers, setGetAllUsers] = useState([])
    let [addnewUser, setAddnewUser] = useState([
        {
            "userId": 0,
            "userName": " ",
            "emailId": "",
            "fullName": "",
            "role": "",
            "createdDate": "",
            "password": "",
            "projectName": "",
            "refreshToken": "",
            "refreshTokenExpiryTime": ""
        }
    ])
    // To add Validation 
    const [isActive, setIsActive] = useState(false)

    useEffect(() => {
        gelAllCustomer()
    }, [])

    //Get Api call
    const gelAllCustomer = async () => {
        try {
            const respone = await axios.get("https://api.freeprojectapi.com/api/CollegeProject/GetAllUsers")
            setGetAllUsers(respone.data.data)
        } catch (error) {
            console.log(error)

        }
    }

    // Triger onchange Event
    const fillUserDetails = (event, key) => {
        setAddnewUser(prevObj => ({ ...prevObj, [key]: event.target.value }))
    }

    // Call post Api 
    const addNewUser = async () => {
        try {
            setIsActive(true)
            if (addnewUser.userName == '' && addnewUser.emailId == '' && addnewUser.fullName == '' && addnewUser.role == '' && addnewUser.createdDate == '' && addnewUser.password == ''&& addnewUser.projectName == '' && addnewUser.refreshToken == '' && addnewUser.refreshTokenExpiryTime == '') {
                const res = await axios.post("https://api.freeprojectapi.com/api/CollegeProject/AddNewUser", addnewUser)
                if (res.data.data) {
                    alert("Add User Sccessfully....!")
                    gelAllCustomer()

                }else{
                    alert(res.data.messages)
                }
            }

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-8 text-center">
                        <div className="card">
                            <div className="accordion-header">
                                <h5>Data Display</h5>
                            </div>

                        </div>
                        <div className="card-body">
                            <table className='table table-bordered'>
                                <thead>
                                    <tr>
                                        <th>Sr no</th>
                                        <th>Full Name</th>
                                        <th>Project Name</th>
                                        <th>E-mail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {
                                        getAllUsers.map((item, index) => {
                                            return (
                                                <tr>
                                                    <td>{index + 1}</td>
                                                    <td>{item.fullName}</td>
                                                    <td>{item.projectName}</td>
                                                    <td>{item.emailId}</td>
                                                </tr>

                                            )
                                        })
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="card">
                            <div className="card-header text-center">
                                <h5>Add Student Details</h5>
                            </div>
                            <div className="card-body">
                                <div className="row">
                                    <div className="col-6 mt-3">
                                        <input type="text" onChange={(event) => { fillUserDetails(event, 'userName') }} placeholder='Enter User Name' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <input type="text" onChange={(event) => { fillUserDetails(event, 'emailId') }} placeholder='Enter User Email' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <input type="text" onChange={(event) => { fillUserDetails(event, 'fullName') }} placeholder='Enter User Full name' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <input type="text" onChange={(event) => { fillUserDetails(event, 'role') }} placeholder='Enter Role' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <input type="date" onChange={(event) => { fillUserDetails(event, 'createdDate') }} placeholder='Enter Date' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <input type="text" onChange={(event) => { fillUserDetails(event, 'password') }} placeholder='Enter Password' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <input type="text" onChange={(event) => { fillUserDetails(event, 'projectName') }} placeholder='Enter Project Name' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <input type="text" onChange={(event) => { fillUserDetails(event, 'refreshToken') }} placeholder='Enter Refresher Token ' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <input type="date" onChange={(event) => { fillUserDetails(event, 'refreshTokenExpiryTime') }} placeholder='Enter Exp.Token' className='form-control' />
                                    </div>
                                    <div className="col-6 mt-3">
                                        <button type="button" className='btn btn-success' onClick={addNewUser}>Save</button></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Customer;