import React from "react";
import NavBar from "../../components/navbar/navbar";
import ImageCarousel from "../../components/image-slider/image-slider";
import slide1 from '..//..//assets/images/slide1.svg';
import slide2 from '..//..//assets/images/slide2.png';
import slide3 from '..//..//assets/images/slide3.png';
import "./homepage.css";
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


function HomePage() {
    const slides = [
        <img src={slide1} alt="Slide 1" />,
        <img src={slide2} alt="Slide 2" />,
        <img src={slide3} alt="Slide 3" />,
    ];

    const history = useNavigate();
    const handleProductClick = (category) => {
        history(`/items?category=${category}`);
    };

    return (
        <>
            <NavBar />
            <ImageCarousel slides={slides} />
            <div>
                <h3 className="homepage-headings"> Main Categories </h3>
            </div>
            <LogoCarousel />
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Pizzas </h3>
            </div>
            <div className="pizza-category" id="pizza">
                <div className="pizza-col-1">
                    <Card
                        imageSrc={pizzaMughlai}
                        itemName={"Chicken Mughlai Base"}
                        price={"PKR 600"}
                        onClick={() => handleProductClick("pizza")}
                    />
                    <Card
                        imageSrc={pizzaSupreme}
                        itemName={"Chicken Supreme Base"}
                        price={"PKR 600"}
                        onClick={() => handleProductClick("pizza")}
                    />
                    <Card
                        imageSrc={pizzaArabian}
                        itemName={"Chicken Arabian Base"}
                        price={"PKR 600"}
                        onClick={() => handleProductClick("pizza")}
                    />
                    <Card
                        imageSrc={pizzaCreamy}
                        itemName={"Chicken Creamy Base"}
                        price={"PKR 600"}
                        onClick={() => handleProductClick("pizza")}
                    />
                </div>
                <div className="pizza-col-2">
                    <Card
                        imageSrc={pizzaTandoori}
                        itemName={"Tandoori Hot"}
                        price={"PKR 550"}
                        onClick={() => handleProductClick("pizza")}
                    />
                    <Card
                        imageSrc={pizzaSicilian}
                        itemName={"Fajita Sicilian"}
                        price={"PKR 550"}
                        onClick={() => handleProductClick("pizza")}
                    />
                    <Card
                        imageSrc={pizzaChikenTikka}
                        itemName={"Fajita Chicken"}
                        price={"PKR 550"}
                        onClick={() => handleProductClick("pizza")}
                    />
                    <Card
                        imageSrc={pizzaHotNSpicy}
                        itemName={"Hot & Spicy"}
                        price={"PKR 550"}
                        onClick={() => handleProductClick("pizza")}
                    />
                </div>
                <div className="pizza-col-3">
                    <Card
                        imageSrc={pizzaPeri}
                        itemName={"Peri Italian"}
                        price={"PKR 550"}
                        onClick={() => handleProductClick("pizza")}
                    />
                </div>
            </div>
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Burgers </h3>
            </div>
            <div className="burger-category" id="burger">
                <Card
                    imageSrc={burgerRegular}
                    itemName={"Reggy Burger"}
                    price={"PKR 360"}
                    onClick={() => handleProductClick("burger")}
                />
                <Card
                    imageSrc={burgerBazinga}
                    itemName={"Bazinga Burger"}
                    price={"PKR 490"}
                    onClick={() => handleProductClick("burger")}
                />
                <Card
                    imageSrc={burgerBazingaSupreme}
                    itemName={"Bazinga Supreme"}
                    price={"PKR 690"}
                    onClick={() => handleProductClick("burger")}
                />
            </div>
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Sandwiches & Platters </h3>
            </div>
            <div className="sandwich-platter-deal" id="sandwich-deal">
                <div className="sandwich-col-1">
                    <Card
                        imageSrc={sandwichDeal1}
                        itemName={"Euro Sandwich"}
                        price={"PKR 790"}
                        onClick={() => handleProductClick("sandwich")}
                    />
                    <Card
                        imageSrc={sandwichDeal4}
                        itemName={"Mexican Sandwich"}
                        price={"PKR 780"}
                        onClick={() => handleProductClick("sandwich")}
                    />
                </div>
                <div className="sandwich-col-2" id="platter-deal">
                    <Card
                        imageSrc={sandwichDeal2}
                        itemName={"Classic Roll Platter"}
                        price={"PKR 990"}
                        onClick={() => handleProductClick("platter")}
                    />
                    <Card
                        imageSrc={sandwichDeal3}
                        itemName={"Special Roasted Platter"}
                        price={"PKR 980"}
                        onClick={() => handleProductClick("platter")}
                    />
                    <Card
                        imageSrc={sandwichDeal5}
                        itemName={"Pizza Stacker"}
                        price={"PKR 790"}
                        onClick={() => handleProductClick("platter")}
                    />
                </div>
            </div>
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Pizza Deals </h3>
            </div>
            <div className="pizza-deal" id="pizza-deal">
                <Card
                    imageSrc={pizzaDeal1}
                    itemName={"Small Pizza Deal"}
                    price={"PKR 590"}
                    onClick={() => handleProductClick("pizza-deal")}
                />
                <Card
                    imageSrc={pizzaDeal2}
                    itemName={"Regular Pizza Deal"}
                    price={"PKR 1,290"}
                    onClick={() => handleProductClick("pizza-deal")}
                />
                <Card
                    imageSrc={pizzaDeal3}
                    itemName={"Large Pizza Deal"}
                    price={"PKR 1,680"}
                    onClick={() => handleProductClick("pizza-deal")}
                />
            </div>
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Burger Deals </h3>
            </div>
            <div className="burger-deal" id="burger-deal">
                <Card
                    imageSrc={burgerDeal1}
                    itemName={"Burger Deal 1"}
                    price={"PKR 1,060"}
                    onClick={() => handleProductClick("burger-deal")}
                />
                <Card
                    imageSrc={burgerDeal2}
                    itemName={"Burger Deal 2"}
                    price={"PKR 1,360"}
                    onClick={() => handleProductClick("burger-deal")}

                />
                <Card
                    imageSrc={burgerDeal3}
                    itemName={"Burger Deal 3"}
                    price={"PKR 1,660"}
                    onClick={() => handleProductClick("burger-deal")}

                />
                <Card
                    imageSrc={burgerDeal4}
                    itemName={"Burger Deal 4"}
                    price={"PKR 1,760"}
                    onClick={() => handleProductClick("burger-deal")}
                />
            </div>
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Side Order </h3>
            </div>
            <div className="side-deal" id="side-deal">
                <Card
                    imageSrc={sideOrder1}
                    itemName={"Fries"}
                    price={"PKR 190"}
                    onClick={() => handleProductClick("side-deal")}
                />
                <Card
                    imageSrc={sideOrder2}
                    itemName={"Nuggets"}
                    price={"PKR 220"}
                    onClick={() => handleProductClick("side-deal")}

                />
                <Card
                    imageSrc={sideOrder3}
                    itemName={"Chicken Piece"}
                    price={"PKR 260"}
                    onClick={() => handleProductClick("side-deal")}
                />
            </div>
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Special </h3>
            </div>
            <div className="special-deal" id="special-deal">
                <Card
                    imageSrc={specialDeal1}
                    itemName={"Crown Crust"}
                    price={"PKR 1,360"}
                    onClick={() => handleProductClick("special-deal")}

                />
                <Card
                    imageSrc={specialDeal2}
                    itemName={"Stuff Crust Pizza"}
                    price={"PKR 1,360"}
                    onClick={() => handleProductClick("special-deal")}
                />
            </div>
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Pastas </h3>
            </div>
            <div className="pasta-deal" id="pasta-deal">
                <Card
                    imageSrc={pastaDeal1}
                    itemName={"Crunchy Chicken Pasta"}
                    price={"PKR 790"}
                    onClick={() => handleProductClick("pasta-deal")}
                />
            </div>
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Add Ons </h3>
            </div>
            <div className="add-ons-deal" id="add-ons-deal">
                <Card
                    imageSrc={addOnsDeal1}
                    itemName={"Juice"}
                    price={"PKR 50"}
                    onClick={() => handleProductClick("add-ons-deal")}
                />
                <Card
                    imageSrc={addOnsDeal2}
                    itemName={"Mayo Dip"}
                    price={"PKR 60"}
                    onClick={() => handleProductClick("add-ons-deal")}
                />
                <Card
                    imageSrc={addOnsDeal3}
                    itemName={"Water Small"}
                    price={"PKR 50"}
                    onClick={() => handleProductClick("add-ons-deal")}
                />
                <Card
                    imageSrc={addOnsDeal4}
                    itemName={"Soft Drink"}
                    price={"PKR 80"}
                    onClick={() => handleProductClick("add-ons-deal")}
                />
            </div>
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default HomePage;