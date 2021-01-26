import React from 'react';
import Slider from '../Shared/Slider/Slider';
import ContactUs from './Contact Us/ContactUs';
import FeedBack from './FeedBack/FeedBack';
import Header from './Header/Header';
import Services from './Services/Services';
import WorkSlider from './WorkSlider/WorkSlider';

const HomePage = () => {
    return (
        <div>
            <Header></Header> 
            <Slider></Slider>
            <Services></Services>
            <WorkSlider></WorkSlider>
            <FeedBack></FeedBack>
            <ContactUs></ContactUs>
        </div>
    );
};

export default HomePage;