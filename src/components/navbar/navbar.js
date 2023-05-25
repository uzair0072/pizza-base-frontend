import React from "react";
import "./navbar.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import cartlogo from "..//..//assets/logo/shopping-cart.svg";
import accountlogo from "..//..//assets/logo/profile-circle.svg";
import "..//..//fonts/app-fonts.module.css";
import "..//..//configs/app-colors.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import SearchBar from "../search-bar/search-bar";

function NavBar() {
    return (
        <>
            <header>
                <div className="logo">
                    <a href="">
                        <img id="logo-sm" src={applogo} alt="Logo" />
                    </a>
                </div>
                <div className="text">
                    <p >
                        <a id="logo-text" href=""> <strong> Pizza Base </strong> </a>
                    </p>
                </div>

                <div class="header-right">
                    <SearchBar />
                    <div class="cart-logo">
                        <a href="">
                            <img src={cartlogo} alt="Cart Logo" />
                        </a>
                    </div>
                    <div class="account-logo">
                        <a href="">
                            <img src={accountlogo} alt="Account Logo" />
                        </a>
                    </div>
                </div>
            </header>
        </>
    )
}

export default NavBar