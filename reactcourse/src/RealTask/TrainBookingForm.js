import React, { useState } from 'react';
import { data } from 'react-router-dom';

const TrainBookingForm = () => {
    const [taskDec, setTaskDec] = useState([
        { Steps: "Create City Array Bind that to Dropdown" },
        { Steps: "Search - Check If Journey details are provided" },
        { Steps: "Search - If From n To City are Same Show Alert" },
        { Steps: "on Exchange - Exchnage From n to Stations" },
        { Steps: "Search - Show Selected Details in below Box" },
        { Steps: "Clear - Clear Booking Form n Hide Journey Details Info" },
    ])
    const [cityList, setCityList] = useState(["Pune", "Mumbai", "Nashik", "Delhi", "Goa"])

    const [trainFrom, setTrainForm] = useState(
        {
            FormStaion: "",
            ToStation: "",
            date: ""
        }
    )

    const handleFormData = (event, key) => {
        setTrainForm(obj => ({ ...obj, [key]: event.target.value }))
    }
    const [ShowTicketDetail, setShowTicketDetails] = useState(null)

    const printFormData = () => {
        // Do not Empty
        if (!trainFrom.FormStaion || !trainFrom.ToStation || !trainFrom.date) {
            alert("Please fill all fields")
            setShowTicketDetails(null)
            return
        }
        //Do not Select Same City
        if (trainFrom.FormStaion === trainFrom.ToStation) {
            alert("Do not Select Same City")
            setShowTicketDetails(null)
            return
        }
        setShowTicketDetails(trainFrom)
    }
    return (
        <div>
            <div className="container">
                <div className="row d-flex justify-content-center mt-4">
                    <div className="col-8">
                        <div className="card">
                            <div className="card-header text-center">
                                <h5>Train Booking Form</h5>
                            </div>
                            <div className="card-body">
                                <ul>
                                    {
                                        taskDec.map((task) => {
                                            return (
                                                <li>{task.Steps}</li>
                                            )
                                        })
                                    }
                                </ul>
                                <div className="row">
                                    <div className="col-4">
                                        <label htmlFor="">From Station</label>
                                        <select name="" id="" className='form-select' onChange={(event) => handleFormData(event, "FormStaion")}>
                                            <option value="">Select City</option>
                                            {
                                                cityList.map((printCity, index) => {
                                                    return (
                                                        <option value={printCity} key={index + 1}>{printCity}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="">To Station</label>
                                        <select name="" id="" className='form-select' onChange={(event) => handleFormData(event, "ToStation")}>
                                            <option value="">Select City</option>
                                            {
                                                cityList.map((printCity, index) => {
                                                    return (
                                                        <option value={printCity} key={index + 1}>{printCity}</option>
                                                    )
                                                })
                                            }
                                        </select>
                                    </div>
                                    <div className="col-4">
                                        <label htmlFor="">Select Date</label>
                                        <input type="date" name="" id="" className='form-control' onChange={(event) => handleFormData(event, "date")} />
                                    </div>
                                </div>
                                <div className="row mt-4">
                                    <div className="col-12 text-center">
                                        <button type="button" className='btn btn-success' onClick={printFormData}>Book Ticket</button>
                                    </div>
                                </div>
                                <div className="row mt-4 d-flex justify-content-center">
                                    {
                                            ShowTicketDetail && (
                                                <div className="col-6">
                                                    <div className="card">
                                                        <div className="card-body">
                                                            <h5 className='your Ticket Is Booked...!'></h5>
                                                            <h5 className="text-success">Your Ticket Booked...!</h5>
                                                            <p>From Station : <strong>{ShowTicketDetail.FormStaion}</strong></p>
                                                            <p>To Station : <strong>{ShowTicketDetail.ToStation}</strong></p>
                                                            <p>Date : <strong>{ShowTicketDetail.date}</strong></p>
                                                        </div>
                                                    </div>
                                                </div>

                                            )
                                        }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default TrainBookingForm;