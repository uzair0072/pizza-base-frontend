import React from "react";
import "./navbar.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import cartlogo from "..//..//assets/icons/shopping-cart.svg";
import accountlogo from "..//..//assets/icons/profile-circle.svg";
import "..//..//fonts/app-fonts.module.css";
import "..//..//configs/app-colors.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../search-bar/search-bar";
import { Link, useLocation } from "react-router-dom";

function NavBar() {
    const location = useLocation();
    const showSignInLink = location.pathname === "/";
    return (
        <>
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

                <div className={`header-right ${showSignInLink ? 'homepage-style' : ''}`}>
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
        </>
    )
}

export default NavBar