import React from "react";
import "./settings.css";
import "..//..//..//..//fonts/app-fonts.module.css";
import "..//..//..//..//..//node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../../../../components/navbar/navbar";
import FancyToggleButton from "../../../../components/toggle-switch/toggle-switch";
import { Link } from "react-router-dom";

function Settings() {
    return (
        <>
            <NavBar />
            <div class="container">
                <div class="column">
                    <ul>
                        <Link to="/my-profile" id="settings"> <li >My Profile</li> </Link> <br></br>
                        <Link to="" id="fav"> <li >Favorite Items</li> </Link>  <br></br>
                        <Link to="" id="del-acc"> <li >Delete Account</li> </Link>  <br></br>
                        <Link to="" id="acc-info"> <li >Account Information</li> </Link> <br></br>
                        <button className="btn-ul" onClick={Settings}> <li>Settings and Configuration</li> </button>
                    </ul>
                </div>
                <div class="column">
                    <div className="sub-col-text">
                        <p>Settings</p>
                    </div>
                    <div class="settings-col">
                        <div className="settings">
                            <div id="left-col">
                                <p className="settings-list"> Enable/Disable Notifications </p>
                                <div id="right-col">
                                    <FancyToggleButton />
                                </div>
                            </div>
                            <div id="left-col">
                                <p className="settings-list"> Light Mode/Dark Mode </p>
                                <div id="right-col">
                                    <FancyToggleButton />
                                </div>
                            </div>
                            <div id="left-col">
                                <p className="settings-list"> Email Alert </p>
                                <div id="right-col">
                                    <FancyToggleButton />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sub-col-text">
                        <p>Configuration</p>
                    </div>
                    <div class="config-col">
                        <div className="configs">
                            <Link to="" class="config-link">
                                <p class="config-list"> Ratings and Reviews </p>
                            </Link>
                            <Link to="" class="config-link">
                                <p class="config-list"> Help Center </p>
                            </Link>
                            <Link to="" class="config-link">
                                <p class="config-list"> Report a Problem </p>
                            </Link>
                            <Link to="" class="config-link">
                                <p class="config-list"> Privacy Policy </p>
                            </Link>
                            <Link to="" class="config-link">
                                <p class="config-list"> App Info </p>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Settings