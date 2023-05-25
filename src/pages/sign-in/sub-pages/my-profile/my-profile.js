import React from "react";
import "./my-profile.css";
import applogo from "..//..//..//..//assets/logo/app-logo.svg";
import Buttons from "..//..//..//..//components/buttons/buttons";
import "..//..//..//..//fonts/app-fonts.module.css";
import "..//..//..//..//..//node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../../../../components/navbar/navbar";

function MyProfile() {
    return (
        <>
            <NavBar />
            <div class="container">
                <div class="column">
                    <ul>
                        <button className="btn-ul"> <li>My Profile</li> </button> <br></br>
                        <a href=""> <li>Favorite Items</li> </a>  <br></br>
                        <a href=""> <li>Delete Account</li> </a>  <br></br>
                        <a href=""> <li>Account Information</li> </a> <br></br>
                        <a href=""> <li>Settiings and Configuration</li> </a>
                    </ul>
                </div>
                <div class="column">
                    <div class="sub-column">
                        <h3>Sub Column 1</h3>
                        <p>Content for Sub Column 1</p>
                    </div>
                    <div class="sub-column">
                        <h3>Sub Column 2</h3>
                        <p>Content for Sub Column 2</p>
                    </div>
                    <div class="sub-column">
                        <h3>Sub Column 3</h3>
                        <p>Content for Sub Column 3</p>
                    </div>
                </div>
            </div>

        </>
    )
}

export default MyProfile