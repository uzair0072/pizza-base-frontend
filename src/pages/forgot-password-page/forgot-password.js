import React from "react";
import "./forgot-password.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import Buttons from "../../components/buttons/buttons";
import "..//..//fonts/app-fonts.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

function ForgotPassword() {
    return (
        <>
            <div class="forgot-pass-pg-row">
                <div class="forgot-pass-pg-cl1">
                    <div id="logo-div">
                        <div id="logo-div-cl1">
                            <Link to="/">
                                <img className="logo-sm" src={applogo} alt="logo-small" />
                            </Link>
                        </div>
                        <div id="logo-div-cl2">
                            <p >
                                <Link className="logo-text" to=""> <strong> Pizza Base </strong> </Link>
                            </p>
                        </div>
                    </div>
                    <div id="forgot-pass-text">
                        <h2 id="forgot-pass-hd">
                            Forgot Your Password?
                        </h2>
                        <p id="forgot-pass-p1">
                            Enter your registered email to receive password reset instructions.
                        </p>
                    </div>
                    <div class="forgot-pass-form">
                        <form action="POST">
                            <label id="l-email-forgot-pg">Email Address:</label> <br></br>
                            <input id="registered-email" type="email" name="email" placeholder="johndoe@example.com" /> <br></br>
                        </form>
                        <div className="remember-pass-div">
                            <p> Remember password? <Link id="remember-pass" to="/sign-in"> Sign in </Link>
                            </p>
                        </div>
                    </div>

                    <div className="btn">
                        <Buttons
                            label={"Send"}
                            id={"btn-gradient"}
                            height={45}
                            width={415}
                            variant={'primary'}
                        />
                    </div>
                </div>
                <div class="forgot-pass-pg-cl2">
                    <img id="logo-lg" src={applogo} alt="SVG" />
                    <h2 id="logo-tagline"> Pizza Base </h2>
                </div>
            </div>
        </>
    )
}

export default ForgotPassword