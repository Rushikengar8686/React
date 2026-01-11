import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';

const Login = () => {

  //  correct useLocation
  const location = useLocation();
  const registerData = location.state?.registerData;

  // Login form state
  const [from, setFrom] = useState({
    Email: "",
    password: ""
  });

  // handle form data
  const hanldeFromdata = (event, key) => {
    setFrom(prevObj => ({
      ...prevObj,
      [key]: event.target.value
    }));
  };

  const LoginUser = (e) => {
    e.preventDefault();

    if (
      from.Email === registerData?.Email &&
      from.password === registerData?.Paaword
    ) {
      alert("Login Successful");
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

              <form>
                <div className="mb-3">
                  <label className="form-label">Email</label>
                  <input
                    type="email"
                    className="form-control"
                    onChange={(e) => hanldeFromdata(e, "Email")}
                    placeholder="Enter Email"
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">Password</label>
                  <input
                    type="password"
                    className="form-control"
                    onChange={(e) => hanldeFromdata(e, "password")}
                    placeholder="Enter Password"
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                  onClick={LoginUser}
                >
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
