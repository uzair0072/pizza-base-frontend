import React from "react";
import NavBar from "../../components/navbar/navbar";
import SlideCarousel from "../../components/slider/slider";
import slide1 from '..//..//assets/images/slide1.svg';
import slide2 from '..//..//assets/images/slide2.png';
import slide3 from '..//..//assets/images/slide3.png';
import "./homepage.css";

function HomePage() {
    const slides = [
        <img src={slide1} alt="Slide 1" />,
        <img src={slide2} alt="Slide 2" />,
        <img src={slide3} alt="Slide 3" />,
    ];
    return (
        <>
            <NavBar />
            <SlideCarousel slides={slides} />
        </>
    )
}

export default HomePage