import React, { useRef } from 'react';
import "./logo-slider.css";
import pizzaCategory from "..//..//assets/images/pizza-category.svg";
import burgerCategory from "..//..//assets/images/burger-category.svg";
import platterCategory from "..//..//assets/images/platter-category.svg";
import pastasCategory from "..//..//assets/images/pastas-category.svg";
import sandwichesCategory from "..//..//assets/images/sandwiches-category.svg";
import sideOrderCategory from "..//..//assets/images/side-order-category.svg";
import addOnsCategory from "..//..//assets/images/add-ons-category.svg";

const LogoCarousel = () => {
  const carouselRef = useRef(null);

  const handlePrevious = () => {
    carouselRef.current.scrollLeft -= carouselRef.current.offsetWidth;
  };

  const handleNext = () => {
    carouselRef.current.scrollLeft += carouselRef.current.offsetWidth;
  };

  const logos = [
    { imageUrl: pizzaCategory, text: "Pizza Deals" },
    { imageUrl: burgerCategory, text: "Burger Deals" },
    { imageUrl: platterCategory, text: "Platters" },
    { imageUrl: sandwichesCategory, text: "Sandwiches" },
    { imageUrl: pastasCategory, text: "Pastas" },
    { imageUrl: sideOrderCategory, text: "Side Order" },
    { imageUrl: addOnsCategory, text: "Add-Ons" },
    { imageUrl: "https://www.google.com.pk/", text: "Other" },
    { imageUrl: "https://www.google.com.pk/", text: "Other" },
  ];

  return (
    <>
      <div className="carousel-container" style={{ display: 'flex', margin: '30px 50px', position: 'relative' }}>
        <ul
          ref={carouselRef}
          style={{
            display: 'flex',
            margin: 0,
            padding: 0,
            gap: '12px',
            listStyle: 'none',
            overflowX: 'auto',
            scrollSnapType: 'x mandatory',
            scrollBehavior: 'smooth',
          }}
        >
          {logos.map((logo, index) => (
            <li
              key={index}
              style={{
                background: '#FFED4F',
                borderRadius: '14px',
                width: '160px',
                height: '220px',
                flexShrink: 0,
                color: '#000',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
              }}
            >
              <img src={logo.imageUrl} alt={logo.text} style={{ width: '100px', height: '100px', marginBottom: '10px' }} />
              <span style={{ fontWeight: 'bold' }}>{logo.text}</span>
            </li>
          ))}
        </ul>
        <button className="carousel-button prev-button" onClick={handlePrevious}>
          &lt;
        </button>
        <button className="carousel-button next-button" onClick={handleNext}>
          &gt;
        </button>
      </div>
    </>
  );
};

export default LogoCarousel;
