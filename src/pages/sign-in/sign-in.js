import React from "react";
import "./sign-in.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import Form from "../../components/form-fields/show-password";
import Buttons from "../../components/buttons/buttons";
import "..//..//fonts/app-fonts.module.css";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function SignIn() {
    return (
        <>
            <div class="sign-in-pg-row">
                <div class="sign-in-pg-cl1">
                    <div id="logo-div">
                        <div id="logo-div-cl1">
                            <a href="">
                                <img id="logo-sm" src={applogo} alt="logo-small" />
                            </a>
                        </div>
                        <div id="logo-div-cl2">
                            <p >
                                <a id="logo-text" href=""> <strong> Pizza Base </strong> </a>
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
                            <input id="create-acc-email" type="email" name="email" placeholder="johndoe@example.com" /> <br></br>
                            <label id="l-pass">Password:</label> <br></br>
                            <Form />
                        </form>
                        <div className="forgot-pass-div">
                            <a id="forgot-pass" href=""> Forgot password </a>
                        </div>
                    </div>

                    <div className="btn">
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
                    </div>
                    <p id="signup-p">
                        Don't have an account? <a id="signup-link" href="" > Sign up </a>
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