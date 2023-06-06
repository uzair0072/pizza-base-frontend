import React from "react";
import "./sign-in.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import Form from "../../components/form-fields/show-password";
import Buttons from "../../components/buttons/buttons";
import "..//..//fonts/app-fonts.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

function SignIn() {
    return (
        <>
            <div class="sign-in-pg-row">
                <div class="sign-in-pg-cl1">
                    <div id="logo-div">
                        <div id="logo-div-cl1">
                            <Link to="/">
                                <img className="logo-sm" src={applogo} alt="logo-small" />
                            </Link>
                        </div>
                        <div id="logo-div-cl2">
                            <p >
                                <Link className="logo-text" to="/"> <strong> Pizza Base </strong> </Link>
                            </p>
                        </div>
                    </div>
                    <div id="sign-in-text">
                        <h2 id="sign-in-hd">
                            Welcome Back
                        </h2>
                        <p id="sign-in-p1">
                            Welcome Back! Please enter your details.
                        </p>
                    </div>
                    <div class="sign-in-form">
                        <form action="POST">
                            <label id="l-email">Email Address:</label> <br></br>
                            <input id="sign-in-email" type="email" name="email" placeholder="johndoe@example.com" /> <br></br>
                            <label id="l-pass">Password:</label> <br></br>
                            <Form />
                        </form>
                        <div className="forgot-pass-div">
                            <Link id="forgot-pass" to="/forgot-password"> Forgot password </Link>
                        </div>
                    </div>
                    <Buttons
                        label={"Sign in"}
                        id={"btn-gradient"}
                        height={45}
                        width={415}
                        variant={'primary'}
                    />

                    <Buttons
                        label={"Sign in with Google"}
                        id={"btn-google"}
                        height={45}
                        width={415}
                        variant={'google'}
                    />
                    <p id="signup-p">
                        Don't have an account? <Link id="signup-link" to="/sign-up" > Sign up </Link>
                    </p>
                </div>
                <div class="sign-in-pg-cl2">
                    <img id="logo-lg" src={applogo} alt="SVG" />
                    <h2 id="logo-tagline"> Pizza Base </h2>
                </div>
            </div>
        </>
    )
}

export default SignIn