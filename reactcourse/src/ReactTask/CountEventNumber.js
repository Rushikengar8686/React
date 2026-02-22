import React, { useEffect, useState } from "react";

const CountEventNumber = () => {
  let [arr, setArr] = useState([1, 2, 3, 4, 5, 6]);
  let [count, setCount] = useState(0);
  const countEventNumber = (arr) => {
    let result = arr.filter((m) => m % 2 == 0).length;
    return setCount(result);
  };
  useEffect(() => {
    countEventNumber(arr);
  }, []);
  return (
    <div>
      <div className="container">
        <div className="row mt-3 d-flex justify-content-center">
          <div className="col-6 ">
            <div className="card">
              <div className="card-header text-center">
                <h4>Count Event Number</h4>
              </div>
              <div className="card-body ">
                <p className="text-center">
                  Give Array arra of number return the count of element that are
                  even integer (divisiable by 2). The value 0 count as even
                  <br/>
                  intput = arr[1,2,3,4,5,6] <br/>output = 2
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

export default CountEventNumber;
