import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Login from './Login';

const Register = () => {
    const navigate = useNavigate()
    const[isVisalbe,setIsVisiable] = useState(false)
    const [from,setFrom] = useState(
        {
        UserName:"",
        Email:"",
        Paaword:""
        }
    )
    // handel form data
    const handleFomr = (event,key)=>{
        setFrom(prevObje =>( {...prevObje,[key]: event.target.value}))
    }
    // list of Register Username and password
    const[listRegisterUserName,setListRegisterUserName] = useState([])
    const SaveInfo = (e)=>{
        e.preventDefault()
       setListRegisterUserName(prevObj => ([...prevObj,from]))
       if(!isVisalbe){
        navigate('/login',{
            state:{
                registerData: from
            }
        })
        }
    }
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Register</h3>
              <form>
                <div className="mb-3">
                  <label htmlFor="username"  className="form-label" >Username</label>
                  <input type="text"id="username"  onChange={(event)=> (handleFomr(event,'UserName'))} className="form-control"placeholder="Enter Username"/>
                </div>

                <div className="mb-3">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input type="email"id="email" className="form-control"placeholder="Enter Email"  onChange={(event)=> (handleFomr(event,'Email'))}/>
                </div>

                <div className="mb-3">
                  <label htmlFor="password" className="form-label" >Password</label>
                  <input type="password"id="password" className="form-control"placeholder="Enter Password" onChange={(event)=> (handleFomr(event,'Paaword'))}/>
                </div>

                <button type="submit" className="btn btn-primary w-100" onClick={SaveInfo}>
                  Register
                </button>
                
              </form>
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
