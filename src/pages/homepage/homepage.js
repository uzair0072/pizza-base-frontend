import React from "react";
import NavBar from "../../components/navbar/navbar";
import ImageCarousel from "../../components/image-slider/image-slider";
import slide1 from '..//..//assets/images/slide1.svg';
import slide2 from '..//..//assets/images/slide2.png';
import slide3 from '..//..//assets/images/slide3.png';
import "./homepage.css";
import LogoCarousel from "../../components/logo-slider/logo-slider";
import Card from "../../components/card/card";
import pizzaDeal1 from "..//..//assets/images/pizza-deal-1.svg";
import pizzaDeal2 from "..//..//assets/images/pizza-deal-2.svg";
import pizzaDeal3 from "..//..//assets/images/pizza-deal-3.svg";
import burgerDeal1 from "..//..//assets/images/burger-deal-1.svg";
import burgerDeal2 from "..//..//assets/images/burger-deal-2.svg";
import burgerDeal3 from "..//..//assets/images/burger-deal-3.svg";
import burgerDeal4 from "..//..//assets/images/burger-deal-4.svg";
import sandwichDeal1 from "..//..//assets/images/sandwich-deal-1.svg";
import sandwichDeal2 from "..//..//assets/images/sandwich-deal-2.svg";
import sandwichDeal3 from "..//..//assets/images/sandwich-deal-3.svg";
import sandwichDeal4 from "..//..//assets/images/sandwich-deal-4.svg";
import sandwichDeal5 from "..//..//assets/images/sandwich-deal-5.svg";
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

function HomePage() {
    const slides = [
        <img src={slide1} alt="Slide 1" />,
        <img src={slide2} alt="Slide 2" />,
        <img src={slide3} alt="Slide 3" />,
    ];
    return (
        <>
            <NavBar />
            <ImageCarousel slides={slides} />
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 700 }}> Main Categories </h3>
            </div>
            <LogoCarousel />
            <hr></hr>
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 700 }}> Pizza Deals </h3>
            </div>
            <div className="pizza-deal">
                <Card
                    imageSrc={pizzaDeal1}
                    itemName={"Small Pizza Deal"}
                    price={"PKR 590"}
                />
                <Card
                    imageSrc={pizzaDeal2}
                    itemName={"Regular Pizza Deal"}
                    price={"PKR 1,290"}
                />
                <Card
                    imageSrc={pizzaDeal3}
                    itemName={"Large Pizza Deal"}
                    price={"PKR 1,680"}
                />
            </div>
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 700 }}> Burger Deals </h3>
            </div>
            <div className="burger-deal">
                <Card
                    imageSrc={burgerDeal1}
                    itemName={"Burger Deal 1"}
                    price={"PKR 1,060"}
                />
                <Card
                    imageSrc={burgerDeal2}
                    itemName={"Burger Deal 2"}
                    price={"PKR 1,360"}
                />
                <Card
                    imageSrc={burgerDeal3}
                    itemName={"Burger Deal 3"}
                    price={"PKR 1,660"}
                />
                <Card
                    imageSrc={burgerDeal4}
                    itemName={"Burger Deal 4"}
                    price={"PKR 1,760"}
                />
            </div>
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 700 }}> Sandwiches & Platters </h3>
            </div>
            <div className="sandwich-platter-deal">
                <div className="sandwich-col-1">
                <Card
                    imageSrc={sandwichDeal1}
                    itemName={"Euro Sandwich"}
                    price={"PKR 790"}
                />
                <Card
                    imageSrc={sandwichDeal2}
                    itemName={"Classic Roll Platter"}
                    price={"PKR 990"}
                />
                <Card
                    imageSrc={sandwichDeal3}
                    itemName={"Special Roasted Platter"}
                    price={"PKR 980"}
                />
                <Card
                    imageSrc={sandwichDeal4}
                    itemName={"Mexican Sandwich"}
                    price={"PKR 780"}
                />
                </div>
                <div className="sandwich-col-2">
                <Card
                    imageSrc={sandwichDeal5}
                    itemName={"Pizza Stacker"}
                    price={"PKR 790"}
                />
                </div>
            </div>
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 700 }}> Side Order </h3>
            </div>
            <div className="side-deal">
                <Card
                    imageSrc={sideOrder1}
                    itemName={"Fries"}
                    price={"PKR 190"}
                />
                <Card
                    imageSrc={sideOrder2}
                    itemName={"Nuggets"}
                    price={"PKR 220"}
                />
                <Card
                    imageSrc={sideOrder3}
                    itemName={"Chicken Piece"}
                    price={"PKR 260"}
                />
            </div>
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 700 }}> Special </h3>
            </div>
            <div className="special-deal">
                <Card
                    imageSrc={specialDeal1}
                    itemName={"Crown Crust"}
                    price={"PKR 1,360"}
                />
                <Card
                    imageSrc={specialDeal2}
                    itemName={"Stuff Crust Pizza"}
                    price={"PKR 1,360"}
                />
            </div>
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 700 }}> Pastas </h3>
            </div>
            <div className="pasta-deal">
                <Card
                    imageSrc={pastaDeal1}
                    itemName={"Crunchy Chicken Pasta"}
                    price={"PKR 790"}
                />
            </div>
            <div>
                <h3 style={{ marginLeft: '50px', marginTop: '50px', fontWeight: 700 }}> Add Ons </h3>
            </div>
            <div className="add-ons-deal">
                <Card
                    imageSrc={addOnsDeal1}
                    itemName={"Juice"}
                    price={"PKR 50"}
                />
                <Card
                    imageSrc={addOnsDeal2}
                    itemName={"Mayo Dip"}
                    price={"PKR 60"}
                />
                <Card
                    imageSrc={addOnsDeal3}
                    itemName={"Water Small"}
                    price={"PKR 50"}
                />
                <Card
                    imageSrc={addOnsDeal4}
                    itemName={"Soft Drink"}
                    price={"PKR 80"}
                />
            </div>
        </>
    )
}

export default HomePage