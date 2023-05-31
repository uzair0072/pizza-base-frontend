import React from "react";
import "./delete-account.css";
import "..//..//..//..//fonts/app-fonts.module.css";
import "..//..//..//..//..//node_modules/bootstrap/dist/css/bootstrap.min.css"
import NavBar from "../../../../components/navbar/navbar";
import { Link } from "react-router-dom";
import DeleteAccountButton from "../../../../components/radio-btn/radio-btn";

function DeleteAccount() {
    return (
        <>
            <NavBar />
            <div class="container">
                <div class="column">
                    <ul>
                        <Link to="/my-profile" id="my-profile"> <li >My Profile</li> </Link> <br></br>
                        <Link to="" id="fav"> <li >Favorite Items</li> </Link>  <br></br>
                        <Link to="" id="del-acc"> <li >Delete Account</li> </Link>  <br></br>
                        <Link to="" id="acc-info"> <li >Account Information</li> </Link> <br></br>
                        <Link to="/my-settings" id="acc-settings"> <li >Settings and Configuration</li> </Link>
                    </ul>
                </div>
                <div class="column">
                    <div class="delete-col">
                        <div className="sub-col-text">
                            <p>Delete account</p>
                        </div>
                        <div className="del-text">
                            <div className="btn">
                                <DeleteAccountButton />
                            </div>
                            When you delete your account, you won’t be able to retrieve the information that you’ve shared with pizza base. All of your information will also be deleted.
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default DeleteAccount