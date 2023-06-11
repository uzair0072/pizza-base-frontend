import React from "react";
import "./footer.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import fbicon from "..//..//assets/icons/fb-icon.svg"
import youtubeicon from "..//..//assets/icons/youtube-icon.svg";
import instaicon from "..//..//assets/icons/insta-icon.svg";
import emailicon from "..//..//assets/icons/email.svg";
import callicon from "..//..//assets/icons/call.svg";
import addressicon from "..//..//assets/icons/address.svg";
import { Link } from "react-router-dom";

function Footer() {
    return (
        <>
            <div className="footer">
                <div className="footer-row-1">
                    <div className="row-1-cell-1">
                        <Link to="">
                            <img id="logo-footer" src={applogo} alt="Logo" />
                        </Link>
                    </div>
                    <div className="row-1-cell-2">
                        <hr className="footer-hr"></hr>
                        <div className="socials">
                            <div className="social-text">
                                <p> Find us on </p>
                            </div>
                            <div className="social-icons">
                                <div className="fb-icon">
                                    <a href=""> <img src={fbicon} alt="fb-icon" id="fb" /> </a>
                                </div>
                                <div className="YT-icon">
                                    <a href=""> <img src={youtubeicon} alt="youtube-icon" id="yt" /> </a>
                                </div>
                                <div className="insta-icon">
                                    <a href=""> <img src={instaicon} alt="insta-icon" id="insta" /> </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer-row-2">
                    <div className="row-2-cell-1">
                        <div className="footer-info-text">
                            <p className="info-heading"> Information </p>
                        </div>

                        <div className="call-icon">
                            <img src={callicon} alt="call-icon" />
                            <div className="phone-number">
                                <p> +923365606893 </p>
                            </div>
                        </div>

                        <div className="email-icon">
                            <img src={emailicon} alt="email-icon" />
                            <div className="email-address">
                                <p> pizzabase@gmail.com </p>
                            </div>
                        </div>

                        <div className="address-icon">
                            <img src={addressicon} alt="address-icon" />
                            <div className="address">
                                <p> Main Road, Near City School, Kamra Road, Attock </p>
                            </div>
                        </div>
                    </div>
                    <div className="row-2-cell-2">
                        <div className="footer-timing-text">
                            <p className="timing-heading"> Our Timings </p>
                        </div>

                        <div className="timing-1">
                            <p> 10:00 am - 11:00 pm </p>
                        </div>

                        <div className="timing-2">
                            <p> 02:00 pm - 03:00 am </p>
                        </div>

                        <div className="timing-3">
                            <p> 10:00 am - 03:00 pm </p>
                        </div>
                    </div>
                    <div className="row-2-cell-3">
                        <div className="empty">
                        </div>

                        <div className="days-1">
                            <p> Monday - Thursday </p>
                        </div>

                        <div className="days-2">
                            <p> Friday </p>
                        </div>

                        <div className="days-3">
                            <p> Saturday - Sunday </p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )

}

export default Footer;