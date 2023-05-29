import React from "react";
import "./navbar.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import cartlogo from "..//..//assets/icons/shopping-cart.svg";
import accountlogo from "..//..//assets/icons/profile-circle.svg";
import "..//..//fonts/app-fonts.module.css";
import "..//..//configs/app-colors.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../search-bar/search-bar";
import { Link } from "react-router-dom";

function NavBar() {
    return (
        <>
            <header>
                <div className="logo">
                    <Link to="/">
                        <img className="logo-sm" src={applogo} alt="Logo" />
                    </Link>
                </div>
                <div className="text">
                    <p >
                        <Link className="logo-text" to="/"> <strong> Pizza Base </strong> </Link>
                    </p>
                </div>

                <div class="header-right">
                    <SearchBar />
                    <div class="cart-logo">
                        <Link to="">
                            <img src={cartlogo} alt="Cart Logo" />
                        </Link>
                    </div>
                    <div class="account-logo">
                        <Link to="">
                            <img src={accountlogo} alt="Account Logo" />
                        </Link>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar