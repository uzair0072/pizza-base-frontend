import React from "react";
import "./regular-pizza-deal.css";
import Footer from "../../../components/footer/footer";
import pizzaImage from "..//..//..//assets/images/pizza-deal-2.svg";
import heartIcon from "..//..//..//assets/icons/heart-icon.svg";
import Counter from "../../../components/add-to-cart-counter/counter";
import Buttons from "../../../components/buttons/buttons";
import RatingSection from "../../../components/rating/rating";
import reviewImage1 from "..//..//..//assets/images/review-image-1.svg";
import reviewImage2 from "..//..//..//assets/images/review-image-2.svg";
import reviewImage3 from "..//..//..//assets/images/review-image-3.svg";
import Card from "../../../components/card/card";
import pizzaDeal1 from "..//..//..//assets/images/pizza-deal-1.svg";
import pizzaDeal3 from "..//..//..//assets/images/pizza-deal-3.svg";
import { Link, useLocation } from "react-router-dom";
import applogo from "..//..//..//assets/logo/app-logo.svg";
import cartlogo from "..//..//..//assets/icons/shopping-cart.svg";
import accountlogo from "..//..//../assets/icons/profile-circle.svg";
import "..//..//../fonts/app-fonts.module.css";
import "..//..//../configs/app-colors.module.css";
import "../../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "..//..//..//components/search-bar/search-bar";

function RegularPizzaDeal() {
    const location = useLocation();
    const showSignInLink = location.pathname === "/regular-pizza-deal";
    return(
        <>
        <div className="page-container">
        <header>
                <div className="logo">
                    <Link to="/">
                        <img id="logo-sm" src={applogo} alt="Logo" />
                    </Link>
                </div>
                <div className="logo-text">
                    <p>
                        <Link id="logo-text" to="/"> <strong> Pizza Base </strong> </Link>
                    </p>
                </div>

                <div className={`header-right ${showSignInLink ? 'regular-pizza-deal-style' : ''}`}>
                    <SearchBar />
                    <div className="cart-logo">
                        <Link to="">
                            <img src={cartlogo} alt="Cart Logo" />
                        </Link>
                    </div>
                    <div className="account-logo">
                        <Link to="">
                            <img src={accountlogo} alt="Account Logo" />
                        </Link>
                        {showSignInLink && (
                            <p>
                                <Link id="sign-in-text-navbar" to="/sign-in"> <strong> Sign In </strong> </Link>
                            </p>
                        )}
                    </div>
                </div>
            </header>
                <div className="content">
                    <div className="pizza-info-container">
                        <div className="image-col">
                            <img src={pizzaImage} alt="pizza deal" id="pizza-img" />
                        </div>
                        <div className="deal-info-col">
                            <div className="info-text">
                                <p className="deal-heading"> Regular Pizza Deal </p>
                                <p className="deal-description"> Any flavor from local love or over the sea category and two 250ml soft drinks.</p>
                            </div>
                            <div className="add-to-fav">
                                <img src={heartIcon} alt="heart-icon" id="heart-icon" />
                                <p id="add-fav-text"> Add to Favourite </p>
                            </div>
                            <div className="item-count">
                                <Counter />
                            </div>
                            <div className="price">
                                PKR 1,290
                            </div>
                            <Buttons
                                variant={"cart-btn"}
                                id={"add-to-cart-btn"}
                                label={"Add to cart"}
                                width={166}
                                height={42}
                            />
                        </div>
                    </div>
                    <p className="rating-heading">
                        Rating
                    </p>
                    <RatingSection />
                    <hr></hr>
                    <p className="review-heading">
                        Reviews
                    </p>
                    <div className="review-section">
                        <div className="review-col-1">
                            <img src={reviewImage1} alt="review 1" />
                            <p className="review-text-1">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                        <div className="review-col-2">
                            <img src={reviewImage2} alt="review 2" />
                            <p className="review-text-2">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                        <div className="review-col-3">
                            <img src={reviewImage3} alt="review 3" />
                            <p className="review-text-3">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi</p>
                        </div>
                    </div>
                    <div className="text-with-lines">
                        <div className="line"></div>
                        <div className="text">More Deals in Suggestion</div>
                        <div className="line"></div>
                    </div>
                    <div className="suggested-deals">
                        <Card
                            imageSrc={pizzaDeal1}
                            itemName={"Small Pizza Deal"}
                            price={"PKR 590"}
                            linkPath={"/small-pizza-deal"}
                        />
                        <Card
                            imageSrc={pizzaDeal3}
                            itemName={"Large Pizza Deal"}
                            price={"PKR 1,680"}
                            linkPath={"/large-pizza-deal"}
                        />
                    </div>
                </div>
                <Footer />
            </div>
        </>
    )
}

export default RegularPizzaDeal;