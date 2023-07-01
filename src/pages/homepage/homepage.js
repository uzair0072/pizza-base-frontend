import React, { useRef } from "react";
import "./homepage.css";
import NavBar from "../../components/navbar/navbar";
import ImageCarousel from "../../components/image-slider/image-slider";
import slide1 from '..//..//assets/images/slide1.svg';
import slide2 from '..//..//assets/images/slide2.png';
import slide3 from '..//..//assets/images/slide3.png';
import LogoCarousel from "../../components/logo-slider/logo-slider";
import Card from "../../components/card/card";
import pizzaMughlai from "..//..//assets/images/mughlai.png";
import pizzaArabian from "..//..//assets/images/arabian.png";
import pizzaCreamy from "..//..//assets/images/creamy.png";
import pizzaChikenTikka from "..//..//assets/images/chicken-tikka.png";
import pizzaHotNSpicy from "..//..//assets/images/hotnspicy.png";
import pizzaSicilian from "..//..//assets/images/sicilian.png";
import pizzaSupreme from "..//..//assets/images/supreme.png";
import pizzaTandoori from "..//..//assets/images/tandoori.png";
import pizzaPeri from "..//..//assets/images/Peri.png";
import burgerRegular from "..//..//assets/images/regular-burger.png";
import burgerBazinga from "..//..//assets/images/bazinga-burger.png";
import burgerBazingaSupreme from "..//..//assets/images/bazinga-supreme.png";
import sandwichDeal1 from "..//..//assets/images/sandwich-deal-1.svg";
import sandwichDeal2 from "..//..//assets/images/sandwich-deal-2.svg";
import sandwichDeal3 from "..//..//assets/images/sandwich-deal-3.svg";
import sandwichDeal4 from "..//..//assets/images/sandwich-deal-4.svg";
import sandwichDeal5 from "..//..//assets/images/sandwich-deal-5.svg";
import pizzaDeal1 from "..//..//assets/images/pizza-deal-1.svg";
import pizzaDeal2 from "..//..//assets/images/pizza-deal-2.svg";
import pizzaDeal3 from "..//..//assets/images/pizza-deal-3.svg";
import burgerDeal1 from "..//..//assets/images/burger-deal-1.svg";
import burgerDeal2 from "..//..//assets/images/burger-deal-2.svg";
import burgerDeal3 from "..//..//assets/images/burger-deal-3.svg";
import burgerDeal4 from "..//..//assets/images/burger-deal-4.svg";
import sideOrder1 from "..//..//assets/images/side-order-1.svg";
import sideOrder2 from "..//..//assets/images/side-order-2.svg";
import sideOrder3 from "..//..//assets/images/side-order-3.svg";
import specialDeal1 from "..//..//assets/images/special-deal-1.svg";
import specialDeal2 from "..//..//assets/images/special-deal-2.svg";
import pastaDeal1 from "..//..//assets/images/pasta-deal-1.svg";
import addOnsDeal1 from "..//..//assets/images/add-ons-1.svg";
import addOnsDeal2 from "..//..//assets/images/add-ons-2.svg";
import addOnsDeal3 from "..//..//assets/images/add-ons-3.svg";
import addOnsDeal4 from "..//..//assets/images/add-ons-4.svg";
import Footer from "../../components/footer/footer";
import { useNavigate } from "react-router-dom";
import data from "../items-list/products-data.json";


function HomePage() {
    const slides = [
        <img src={slide1} alt="Slide 1" />,
        <img src={slide2} alt="Slide 2" />,
        <img src={slide3} alt="Slide 3" />,
    ];

    const history = useNavigate();
    const handleProductClick = (id, name, price, category, img, description) => {
        history(`/product-detail?id=${id}&name=${name}&price=${price}&category=${category}&img=${img}&description=${description}`);
    };

    // Grouping products by category
    const groupedProducts = data.reduce((acc, product) => {
        if (!acc[product.category]) {
            acc[product.category] = [];
        }
        acc[product.category].push(product);
        return acc;
    }, {});

    const productImages = {
        "Pizzas": {
            "Chicken Mughlai Base": pizzaMughlai,
            "Chicken Arabian Base": pizzaArabian,
            "Chicken Creamy Base": pizzaCreamy,
            "Fajita Chicken": pizzaChikenTikka,
            "Hot & Spicy": pizzaHotNSpicy,
            "Fajita Sicilian": pizzaSicilian,
            "Chicken Supreme Base": pizzaSupreme,
            "Tandoori Hot": pizzaTandoori,
            "Peri Italian": pizzaPeri
        },
        "Burgers": {
            "Reggy Burger": burgerRegular,
            "Bazinga Burger": burgerBazinga,
            "Bazinga Supreme": burgerBazingaSupreme
        },
        "Sandwiches": {
            "Mexican Sandwich": sandwichDeal1,
            "Euro Sandwich": sandwichDeal2,
        },
        "Platters": {
            "Classic Roll Platter": sandwichDeal3,
            "Special Roasted Platter": sandwichDeal4,
            "Pizza Stacker": sandwichDeal5
        },
        "Pizza Deals": {
            "Small Pizza Deal": pizzaDeal1,
            "Regular Pizza Deal": pizzaDeal2,
            "Large Pizza Deal": pizzaDeal3
        },
        "Burger Deals": {
            "Burger Deal 1": burgerDeal1,
            "Burger Deal 2": burgerDeal2,
            "Burger Deal 3": burgerDeal3,
            "Burger Deal 4": burgerDeal4
        },
        "Side Order": {
            "Fries": sideOrder1,
            "Nuggets": sideOrder2,
            "Chicken Piece": sideOrder3
        },
        "Special Deals": {
            "Crown Crust": specialDeal1,
            "Stuff Crust Pizza": specialDeal2
        },
        "Pastas": {
            "Crunchy Chicken Pasta": pastaDeal1
        },
        "Add-Ons": {
            "Juice": addOnsDeal1,
            "Mayo Dip": addOnsDeal2,
            "Water Small": addOnsDeal3,
            "Soft Drink": addOnsDeal4
        }
    };
    const categoryRefs = useRef({});
    // const handleLogoClick = (category) => {
    //     const categoryRef = categoryRefs.current[category];
    //     console.log("category========>",categoryRef)
    //     if (categoryRef) {
    //         categoryRef.scrollIntoView({ behavior: "smooth" });
    //     }
    // };

    return (
        <>
            <NavBar />
            <ImageCarousel slides={slides} />
            <div>
                <h3 className="homepage-headings">Main Categories</h3>
            </div>
            <LogoCarousel  />
            <hr className="homepage-hr" />
            {Object.entries(groupedProducts).map(([category, products]) => (
                <div key={category} id={`main-${category}`} ref={(ref) => (categoryRefs.current[category] = ref)}>
                    <h3 className="homepage-headings">{category}</h3>
                    <div className="flex flex-wrap col">
                        {products.map((product) => (
                            <Card
                                key={product.id}
                                imageSrc={productImages[product.category][product.name]}
                                itemName={product.name}
                                price={product.price}
                                onClick={() =>
                                    handleProductClick(
                                        product.id,
                                        product.name,
                                        product.price,
                                        product.category,
                                        productImages[product.category][product.name],
                                        product.description
                                    )
                                }
                            />
                        ))}
                    </div>
                    <hr className="homepage-hr" />
                </div>
            ))}
            <div className="footer">
                <Footer />
            </div>
        </>
    );
}

export default HomePage;