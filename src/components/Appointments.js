import React from "react";
import glasses from './img/glasses.png';
import Button from '@mui/material/Button';

const Appointments = () => {
    return ( 
        <div className="App">
            <div className="logo">
                <img src={glasses} alt="glasses" />
            </div>
            <h1>APPOINTMENTS</h1>
            <h3>To schedule an appointment, please click the following</h3>
            <Button variant="contained" color="info">Schedule Appointment</Button>
        </div>
    );
}

export default Appointments;