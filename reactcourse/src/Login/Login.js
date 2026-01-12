import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = ({ setIsActive }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const registerData = location.state?.registerData;

  const [form, setForm] = useState({
    Email: "",
    password: ""
  });

  const handleFormData = (event, key) => {
    setForm(prev => ({
      ...prev,
      [key]: event.target.value
    }));
  };

  const LoginUser = (e) => {
    e.preventDefault();

    if (
      form.Email === registerData?.Email &&
      form.password === registerData?.Paaword
    ) {
      setIsActive(true);            
      navigate(' ');      
    } else {
      alert("Failed login. Try again");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <div className="card shadow-sm">
            <div className="card-body">
              <h3 className="card-title text-center mb-4">Login</h3>

              <form onSubmit={LoginUser}>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => handleFormData(e, "Email")}
                    placeholder="Enter Email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => handleFormData(e, "password")}
                    placeholder="Enter Password"
                  />
                </div>

                <button type="submit" className="btn btn-primary w-100">
                  Login
                </button>
              </form>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
