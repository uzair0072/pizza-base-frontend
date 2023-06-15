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
import Footer from "../../components/footer/footer";

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
                <h3 className="homepage-headings"> Main Categories </h3>
            </div>
            <LogoCarousel />
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Pizza Deals </h3>
            </div>
            <div className="pizza-deal" id="pizza-deal">
                <Card
                    imageSrc={pizzaDeal1}
                    itemName={"Small Pizza Deal"}
                    price={"PKR 590"}
                    linkPath={"./small-pizza-deal"}
                />
                <Card
                    imageSrc={pizzaDeal2}
                    itemName={"Regular Pizza Deal"}
                    price={"PKR 1,290"}
                    linkPath={"./regular-pizza-deal"}
                />
                <Card
                    imageSrc={pizzaDeal3}
                    itemName={"Large Pizza Deal"}
                    price={"PKR 1,680"}
                    linkPath={"./large-pizza-deal"}
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
                <div className="sandwich-col-2" id="platter-deal">
                    <Card
                        imageSrc={sandwichDeal5}
                        itemName={"Pizza Stacker"}
                        price={"PKR 790"}
                    />
                </div>
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
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Special </h3>
            </div>
            <div className="special-deal" id="special-deal">
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
            <hr className="homepage-hr"></hr>
            <div>
                <h3 className="homepage-headings"> Pastas </h3>
            </div>
            <div className="pasta-deal" id="pasta-deal">
                <Card
                    imageSrc={pastaDeal1}
                    itemName={"Crunchy Chicken Pasta"}
                    price={"PKR 790"}
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
            <div className="footer">
                <Footer />
            </div>
        </>
    )
}

export default HomePage;