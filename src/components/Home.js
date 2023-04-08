import React from "react";
import './css/Home.css';
import glasses from './img/glasses.png';
import location from './img/location.jpg';

const Home = () => {
    return ( 
        <div className="App">

            <div className="logo">
                <img src={glasses} alt="glasses" />
            </div>

            <h1>DR. NISSAN'S EYE PLACE OPTOMETRY</h1>
            <h5>change font & navbar</h5>

            <div className="homepage"> 
                <img src={location} alt="location" />
                <p>Welcome to Dr. Nissan's Eye Place Optometry, where we prioritize your eye health and offer a range of services to help you maintain optimal vision. Our experienced optometrists conduct comprehensive eye exams to accurately prescribe glasses, contact lenses, and even offer LASIK surgery. Come visit us at our convenient location at 1136 Main Street, and give us a call at (555) 123-4567 to schedule an appointment today. Trust us to keep your eyes healthy and your vision clear!</p>
            </div>
        </div>
    );
}

export default Home;
