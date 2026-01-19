import { useEffect, useState } from "react";
import axios from 'axios'
function App() {
  // Set State
  const [getallUser,setGetAllUser] = useState([])
  
  // get alllUserUrl
  const url = "http://localhost:8000/user"
  
  useEffect(()=>{
getallUserFunction()
  },[])
  //getall UserFunction
  const getallUserFunction = async()=>{
      const result = await axios.get(url)
      setGetAllUser(result.data)
  }

  return (
    <div>
      <div className="container mt-3">
        <div className="row">
          <div className="col-6">
            <table className="table table-borderless table-bordered text-center">
              <thead>
                <tr>
                  <th>Sr.No</th>
                  <th>First Name</th>
                  <th>Last Name</th>
                  <th>Phone No</th>
                  <th>Email</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {
                  getallUser.map((data,index)=>{
                    return(
                      <tr>
                        <td>{index+1}</td>
                        <td>{data.firstName}</td>
                        <td>{data.lastName}</td>
                        <td>{data.phoneNo}</td>
                        <td>{data.Email}</td>
                        <td className="m-1">
                          <span>
                            <button type="button" className="btn btn-warning btn-sm m-1">Edit</button>
                          <button type="button" className="btn btn-danger btn-sm">Del</button>
                          </span>
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

    </div>
  );
}

export default App;
