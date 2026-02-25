import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const NavBar = () => {
    const naviGate = useNavigate()
    return (
        <div>
            <div className="container-fulid">
                <div className="row">
                    <div className="col-12">
                        <nav className="navbar navbar-expand-lg navbar-light bg-info">
                            <div className="container-fluid">
                                <Link className="navbar-brand" to="/">Navbar</Link>
                                <div className="collapse navbar-collapse">
                                    <ul className="navbar-nav me-auto">
                                        <li className='nav-item me-2'>
                                            <select name="" id="" className='form-select' onChange={(e)=> naviGate(e.target.value)}>
                                                <option value="/ReactTask">React Topic</option>
                                                <option value="/ReactTask/variable">variable</option>
                                                <option value="/ReactTask/Event">Event</option>
                                                <option value="/ReactTask/SetState">SetState</option>
                                                <option value="/ReactTask/DynamicCss">DynamicCss</option>
                                                <option value="/ReactTask/cutomer">cutomer</option>
                                                <option value="/ReactTask/ParentComp">ParentComp</option>
                                                <option value="/ReactTask/NewHooks">NewHooks</option>
                                                <option value="/ReactTask/DashValue">DashValue</option>
                                            </select>
                                        </li>
                                        <li className="nav-item">
                                            <select name="" id="" className="form-select" onChange={(e)=> naviGate(e.target.value)}>
                                                <option value="/ReactTask">ReactTask</option>
                                                <option value="/ReactTask/AcronoymStr">AcronoymStr</option>
                                                <option value="/ReactTask/CountEvent">CountEvent</option>
                                                <option value="/ReactTask/CountNegative">CountNegative</option>
                                            </select>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NavBar;