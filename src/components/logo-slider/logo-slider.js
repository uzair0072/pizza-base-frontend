import React, { useRef } from 'react';
import "./logo-slider.css";
import pizzaCategory from "..//..//assets/images/pizza.png";
import burgerCategory from "..//..//assets/images/burger.png";
import pizzaDealCategory from "..//..//assets/images/pizza-category.svg";
import burgerDealCategory from "..//..//assets/images/burger-category.svg";
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
    { imageUrl: pizzaCategory, text: "Pizzas", id: "main-Pizzas" },
    { imageUrl: burgerCategory, text: "Burgers", id: "main-Burgers" },
    { imageUrl: sandwichesCategory, text: "Sandwiches", id: "main-Sandwiches" },
    { imageUrl: platterCategory, text: "Platters", id: "main-Platters" },
    { imageUrl: pizzaDealCategory, text: "Pizza Deals", id: "main-Pizza Deals" },
    { imageUrl: burgerDealCategory, text: "Burger Deals", id: "main-Burger Deals" },
    { imageUrl: pastasCategory, text: "Pastas", id: "main-Pastas" },
    { imageUrl: sideOrderCategory, text: "Side Order", id: "main-Side Order" },
    { imageUrl: addOnsCategory, text: "Add-Ons", id: "main-Add-Ons" },
    { imageUrl: "https://www.google.com.pk/", text: "Other", id: "" },
    { imageUrl: "https://www.google.com.pk/", text: "Other", id: "" },
  ];

  const handleLogoClick = (id) => {

    console.log("logo-slider", id)
    const section = document.getElementById(id);
    console.log("logo-slider section", section)

    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
    }
  };

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
                cursor: 'pointer',
              }}
              onClick={() => handleLogoClick(logo.id)}
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