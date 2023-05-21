import React from "react";
import "./sign-up.css";
import Buttons from "../../components/buttons/buttons.js";
import applogo from "../../assets/logo/app-logo.svg"
import "../../configs/app-colors.module.css"
import "../../fonts/app-fonts.module.css"

function SignUp() {
    return (
        <>
            <div class="sign-up-pg-row">
                <div class="sign-up-pg-cl1">
                    <div id="logo-div">
                        <div id="logo-div-cl1">
                            <a href="">
                                <img id="logo-sm" src={applogo} alt="logo-small" />
                            </a>
                        </div>
                        <div id="logo-div-cl2">
                            <h4 >
                                <a id="logo-text" href=""> Pizza Base </a>
                            </h4>
                        </div>
                    </div>
                    <div id="sign-up-text">
                        <h2 id="create-acc-hd">
                            Make a new account
                        </h2>
                        <p id="create-acc-p1">
                            Enter the following information to make an account.                        </p>
                    </div>
                    <div class="sign-up-form">
                        <form action="POST">
                            <label id="l-name">Name:</label> <br></br>
                            <input type="text" name="Name" placeholder="John Doe" id="create-acc-name" /> <br></br>
                            <label id="l-email">Email Address:</label> <br></br>
                            <input type="email" name="email" placeholder="johndoe@example.com" id="create-acc-email" /> <br></br>
                            <label id="l-pass">Password:</label> <br></br>
                            <input type="password" name="pass" placeholder="Password" id="create-acc-pass" /> <br></br>
                            <label id="l-cpass">Confirm Password:</label> <br></br>
                            <input type="password" name="confirm-pass" placeholder="Password" id="confirm-acc-pass" />
                        </form>
                    </div>
                    <div className="btn-gradient">
                        <Buttons
                            label={"Create Account"}
                            id={"btn-gradient"}
                            height={50}
                            width={415}
                            variant={'primary'}
                        />
                    </div>
                    <p id="acc-exist-p">
                        Already have an account? <a id="signin-link" href="" > Sign in </a>
                    </p>
                </div>
                <div class="sign-up-pg-cl2">
                    <img id="logo-lg" src={applogo} alt="SVG as an image" />
                    <h2 id="logo-tagline"> Pizza Base </h2>
                </div>
            </div>
        </>
    )
}

export default SignUp