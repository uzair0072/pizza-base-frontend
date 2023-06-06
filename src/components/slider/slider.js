import React, { useState, useEffect } from 'react';
// import slide1 from "..//..//assets/images/slide1.svg";
// import slide2 from "..//..//assets/images/slide2.png";
// import slide3 from "..//..//assets/images/slide3.png";


const HomepageSlider = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slideImages = ['./slide1.svg', './slide2.png', './slide3.png'];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
    }, 3500);
    return () => clearInterval(interval);
  }, []);

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slideImages.length) % slideImages.length);
  };

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slideImages.length);
  };

  return (
    <div className="slider">
      <div className="slides">
        {slideImages.map((image, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            <img src={image} alt={`Slide ${index + 1}`} />
          </div>
        ))}
      </div>
      <div className="scroll-arrows">
        <div className="scroll-arrow left-arrow" onClick={prevSlide}></div>
        <div className="scroll-arrow right-arrow" onClick={nextSlide}></div>
      </div>
    </div>
  );
};

export default HomepageSlider;
