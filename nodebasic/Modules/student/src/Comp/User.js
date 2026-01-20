import React, { useEffect, useState } from 'react';
import axios from 'axios'
const User = () => {
    const[getdata,setGetData] = useState([])
    const [addNewStudent,setAddNewStudent] = useState(
        {
            firstName:"",
            lastName:"",
            phoneNo:"",
            Email:""
        }
    )
    
    // handleGeta All Student data
    const handelAddNewStudentData = (event,key)=>{
        setAddNewStudent(prevObje =>({...prevObje,[key]:event.target.value}))
    }
    
    const GetAndPostUrl = "http://localhost:8000/user"
    const deleteUserByIdUrl = "http://localhost:8000/user"
    
    const GetAllUser = async ()=>{
        try {
            const result = await axios.get(GetAndPostUrl)
            setGetData(result.data)
        } catch (error) {
            console.log(error)
        }

    }

    // add new student
    const saveStudent = async ()=>{
        try {
            const result = await axios.post(GetAndPostUrl,addNewStudent)
            setAddNewStudent(result.data)
            GetAllUser()
            setAddNewStudent({
            firstName:"",
            lastName:"",
            phoneNo:"",
            Email:""
        })
        } catch (error) {
            console.log(error)
        }
    }

    // Delete Student
    const deleteStudent =  async (id)=>{
        try {
            const deleteId = await axios.delete(`${deleteUserByIdUrl}/${id}`)
            alert(deleteId.data.messagae)
            GetAllUser()
        } catch (error) {
            console.log(error)
        }
    }
    useEffect(()=>{
        GetAllUser()
    },[])

    return (
        <div>
            <div className="container-fluid">
                <div className="row mt-3">
                    <div className="col-7">
                        <div className="card">
                            <div className="card-header">
                                <h4>Wel-Come</h4>
                            </div>
                            <div className="card-body">
                                <table className='table table-bordered table-hover text-center'>
                                    <thead>
                                        <tr>
                                            <th>Sr.no</th>
                                            <th>FirstName</th>
                                            <th>lastName</th>
                                            <th>PhoneNo</th>
                                            <th>Email</th>
                                            <th>Action</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {
                                            getdata.map((users,index)=>{
                                                return(
                                                    <tr>
                                                        <td>{index+1}</td>
                                                        <td>{users.firstName}</td>
                                                        <td>{users.lastName}</td>
                                                        <td>{users.phoneNo}</td>
                                                        <td>{users.Email}</td>
                                                        <td>
                                                            <button type="button" className='btn btn-sm btn-warning m-2'>Edit</button>
                                                            <button type="button" className='btn btn-sm btn-danger' onClick={()=>deleteStudent(users._id)}>Del</button>
                                                        </td>
                                                    </tr>

                                                )
                                            })
                                        }
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                    <div className="col-5">
                        <div className="card">
                            <div className="card-header">
                                <h5>Add Student Inforamtion</h5>
                            </div>
                            <div className="row">
                            <div className="col-6 p-4">
                                <label htmlFor="">Enter Student First Name</label>
                                <input type="text"  className='form-control mt-2' onChange={(event)=>{handelAddNewStudentData(event,'firstName')}} placeholder='Enter Name'/>
                            </div>
                            <div className="col-6 p-4">
                                <label htmlFor="">Enter Student Last Name</label>
                                <input type="text"  className='form-control mt-2' onChange={(event)=>{handelAddNewStudentData(event,'lastName')}} placeholder='Enter Name'/>
                            </div>
                            <div className="col-6 p-4">
                                <label htmlFor="">Enter Student Phone No</label>
                                <input type="text"  className='form-control mt-2' onChange={(event)=>{handelAddNewStudentData(event,'phoneNo')}} placeholder='Enter Name'/>
                            </div>
                            <div className="col-6 p-4">
                                <label htmlFor="">Enter Student Email</label>
                                <input type="text"  className='form-control mt-2' onChange={(event)=>{handelAddNewStudentData(event,'Email')}} placeholder='Enter Name'/>
                            </div>
                            <div className="row text-center p-3">
                                <div className="col-12">
                                    <button type="button" className='btn btn-success' onClick={saveStudent}>Save</button>
                                </div>
                            </div>
                        </div>
                        </div>
                        

                    </div>
                </div>
            </div>
        </div>
    );
};

export default User;