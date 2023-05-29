import React from "react";
import "./my-profile.css";
import profilePic from "..//..//..//..//assets/icons/profile-pic.svg";
import Buttons from "..//..//..//..//components/buttons/buttons";
import "..//..//..//..//fonts/app-fonts.module.css";
import "..//..//..//..//..//node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../../../../components/navbar/navbar";
import { Link } from "react-router-dom";

function MyProfile() {
    return (
        <>
            <NavBar />
            <div class="container">
                <div class="column">
                    <ul>
                        <Link to="" id="my-profile"> <li >My Profile</li> </Link>  <br></br>
                        <Link to="" id="fav"> <li >Favorite Items</li> </Link>  <br></br>
                        <Link to="" id="del-acc"> <li >Delete Account</li> </Link>  <br></br>
                        <Link to="" id="acc-info"> <li >Account Information</li> </Link> <br></br>
                        <Link to="/my-settings" id="settings"> <li >Settings and Configuration</li> </Link>
                    </ul>
                </div>
                <div class="column">
                    <div className="sub-col-text">
                        <p>My Profile</p>
                    </div>
                    <div class="my-profile-col">
                        <div className="img-div">
                            <img src={profilePic} alt="profile-pic" id="profile-pic" />
                        </div>
                        <div className="name-div">
                            <p id="name"> John Doe </p> <br></br>
                            <p id="profile-description"> Hi everyone!</p>
                        </div>
                        <div className="btn-profile-col">
                            <Buttons
                                variant={'edit'}
                                id={'btn-edit'}
                                label={'Edit'}
                                width={110}
                                height={42}
                            />
                            <Buttons
                                variant={'add'}
                                id={'btn-add'}
                                label={'Add'}
                                width={86}
                                height={42}
                            />
                        </div>
                    </div>
                    <div class="personal-info-col">
                        <div className="col1">
                            <div className="sub-col-text">
                                <p>Personal Information</p>
                                <div className="btn-profile-col">
                                    <Buttons
                                        variant={'edit'}
                                        id={'btn-edit'}
                                        label={'Edit'}
                                        width={110}
                                        height={42}
                                    />
                                    <Buttons
                                        variant={'add'}
                                        id={'btn-add'}
                                        label={'Add'}
                                        width={86}
                                        height={42}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="text-info">
                                <div className="text-info-col1">
                                    <p className="grey-text">First Name: </p>
                                    <p className="normal-text"> John </p>
                                    <p className="grey-text"> Email: </p>
                                    <p className="normal-text">someone@example.com</p>
                                    <p className="grey-text"> Bio </p>
                                    <p className="normal-text">Hi! everyone</p>
                                </div>
                                <div className="text-info-col2">
                                    <p className="grey-text"> Last Name: </p>
                                    <p className="normal-text"> Doe </p>
                                    <p className="grey-text"> Phone Number: </p>
                                    <p className="normal-text"> +923435658812 </p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="address-col">
                        <div className="col1">
                            <div className="sub-col-text">
                                <p>Address</p>
                                <div className="btn-profile-col">
                                    <Buttons
                                        variant={'edit'}
                                        id={'btn-edit'}
                                        label={'Edit'}
                                        width={110}
                                        height={42}
                                    />
                                    <Buttons
                                        variant={'add'}
                                        id={'btn-add'}
                                        label={'Add'}
                                        width={86}
                                        height={42}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col2">
                            <div className="text-info">
                                <div className="text-address-col1">
                                    <p className="grey-text">Country: </p>
                                    <p className="normal-text"> Pakistan </p>
                                    <p className="grey-text"> Home Address: </p>
                                    <p className="normal-text">House No 17, Street 3, Main Road Attock</p>
                                </div>
                                <div className="text-address-col2">
                                    <p className="grey-text"> City/State </p>
                                    <p className="normal-text"> Attock/Punjab </p>
                                    <p className="grey-text"> Delivery Address </p>
                                    <p className="normal-text"> House No 17, Street 3, Main Road Attock </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MyProfile