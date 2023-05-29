import React from "react";
import "./sign-up.css";
import Buttons from "../../components/buttons/buttons.js";
import applogo from "../../assets/logo/app-logo.svg"
import "../../fonts/app-fonts.module.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import Form from "..//..//components/form-fields/show-password";
import { Link } from "react-router-dom";

function SignUp() {
    return (
        <>
            <div class="sign-up-pg-row">
                <div class="sign-up-pg-cl1">
                    <div class="logo-div">
                        <div id="logo-div-cl1">
                            <Link to="/">
                                <img className="logo-sm" src={applogo} alt="logo-small" />
                            </Link>
                        </div>
                        <div id="logo-div-cl2">
                            <p>
                                <Link className="logo-text" to="/"> <strong> Pizza Base </strong> </Link>
                            </p>
                        </div>
                    </div>
                    <div id="sign-up-text">
                        <h2 id="create-acc-hd">
                            Make a new account
                        </h2>
                        <p id="create-acc-p1">
                            Enter the following information to make an account.
                        </p>
                    </div>
                    <div class="sign-up-form">
                        <form action="POST">
                            <label id="l-name">Name:</label> <br></br>
                            <input type="text" name="Name" placeholder="John Doe" id="create-acc-name" /> <br></br>
                            <label id="l-email">Email Address:</label> <br></br>
                            <input type="email" name="email" placeholder="johndoe@example.com" id="create-acc-email" /> <br></br>
                            <label id="l-pass">Password:</label> <br></br>
                            <Form />
                            <label id="l-cpass">Confirm Password:</label> <br></br>
                            <Form />
                        </form>
                    </div>
                    <div className="btn-gradient">
                        <Buttons
                            label={"Create Account"}
                            id={"btn-gradient"}
                            height={45}
                            width={415}
                            variant={'primary'}
                        />
                    </div>
                    <p id="acc-exist-p">
                        Already have an account? <Link id="signin-link" to="/sign-in" > Sign in </Link>
                    </p>
                </div>
                <div class="sign-up-pg-cl2">
                    <img id="logo-lg" src={applogo} alt="SVG" />
                    <h2 id="logo-tagline"> Pizza Base </h2>
                </div>
            </div>
        </>
    )
}

export default SignUp