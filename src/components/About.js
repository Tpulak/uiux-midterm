import React from "react";
import './css/About.css';
import glasses from './img/glasses.png';
import doctor from './img/doctor.jpg';
import office from './img/office.jpg';
const About = () => {
    return ( 
        <div className="App">
            <div className="logo">
                <img src={glasses} alt="glasses" />
            </div>
            <h1> ABOUT DR. NISSAN</h1>
            <div className="doctor">
                <img src={doctor} alt="doctor" />
                <p>Dr. Nissan Deb Nath is an experienced optometrist providing exceptional eye care services. With a Doctor of Optometry degree from Harvard University, he has honed his expertise to provide top-notch care. Dr. Nissan's passion for changing lives through improved vision sets him apart, and his patients leave satisfied. He offers various services, including prescribing glasses, contact lenses, and performing LASIK surgery, to help patients achieve optimal eye health and clear vision.</p>
            </div>

            <div className="office">
                <p> Our eye doctor office offers a cozy and inviting atmosphere, perfect for putting you at ease during your visit. Our friendly staff are dedicated to making you feel welcome, and our office is designed with your comfort in mind. From soft lighting to comfortable seating, we've paid attention to every detail to ensure that your visit is as stress-free as possible. Whether you're coming in for a routine exam or a more complex procedure, we're committed to providing you with the best possible experience. </p>
                <img src={office} alt="office" />
            </div>
        </div>
    );
}

export default About;