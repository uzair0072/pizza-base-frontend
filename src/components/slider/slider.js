import React, { useState, useEffect } from 'react';
import "./slider.css";

const SlideCarousel = ({ slides }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  useEffect(() => {
    let timer = null;
    if (!isHovered) {
      timer = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
      }, 3500);
    }

    return () => clearInterval(timer);
  }, [isHovered, slides.length]);

  return (
    <div className="slide-carousel" onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div className="slides" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
        {slides.map((slide, index) => (
          <div key={index} className={`slide ${index === currentSlide ? 'active' : ''}`}>
            {slide}
          </div>
        ))}
      </div>
      <div className="carousel-navigation">
        <button className="prev-button" onClick={prevSlide}>
          &lt;
        </button>
        <button className="next-button" onClick={nextSlide}>
          &gt;
        </button>
      </div>
      <div className="slide-dots">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`slide-dot ${index === currentSlide ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};

export default SlideCarousel;
