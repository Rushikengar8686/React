import React, { useEffect, useState } from "react";

const CountNegative = () => {
    let [arr,setArr] = useState([-1,0,2,4,-2,-3])
    let [count,SetCount] = useState(0)

    const CountNegative = (arr)=>{
        let result = arr.filter((m)=> m < 0).length
         return SetCount(result)
    }
    useEffect(()=>{
        CountNegative(arr)
    },[])
  return (
    <div>
      <div className="container">
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-6 ">
            <div className="card">
              <div className="card-header text-center">
                <h4>Count Negative Number</h4>
              </div>
              <div className="card-body ">
                <p className="text-center">
                  Give Array arr of number return the count of element that are
                 Strictly less than 0
                  <br />
                  intput = ar[-1,0,2,4,-2,-3] <br />
                  output = 2
                </p>
                <h1 className="text-center">{count}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CountNegative;
