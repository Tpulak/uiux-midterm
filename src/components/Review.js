import React from "react";
import glasses from './img/glasses.png';
import Button from '@mui/material/Button';

const Reviews = () => {
    return ( 
        <div className="App">
            <div className="logo">
                <img src={glasses} alt="glasses" />
            </div>
            <h1>REVIEWS</h1>
            <h3>To view satsified patient's experiences or to write a review yourself, please click the following.</h3>
            <Button sx={{bgcolor : '#D27D2D', ":hover": {bgcolor: "#D27D2D"} }} variant="contained" color="info" >Reviews</Button>
        </div>
    );
}

export default Reviews;