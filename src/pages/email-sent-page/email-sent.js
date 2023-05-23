import React from "react";
import "./email-sent.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import Buttons from "../../components/buttons/buttons";
import "..//..//fonts/app-fonts.module.css";
import "..//..//configs/app-colors.module.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

function EmailSent() {
    return (
        <>
            <div class="email-sent-pg-row">
                <div class="email-sent-pg-cl1">
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
                    <div id="email-sent-text">
                        <h2 id="email-sent-hd">
                            Email has been Sent!
                        </h2>
                        <p id="email-sent-p1">
                            Please check your inbox & click on the received link to reset your password.
                        </p>
                    </div>
                    <div className="btn">
                        <Buttons
                            label={"Send"}
                            id={"btn-gradient"}
                            height={45}
                            width={415}
                            variant={'primary'}
                        />
                        <div className="resend-pass-div">
                            <p> Didn't receive the link? <a id="resend-pass" href=""> Resend </a>
                            </p>
                        </div>
                    </div>

                </div>
                <div class="email-sent-pg-cl2">
                    <img id="logo-lg" src={applogo} alt="SVG" />
                    <h2 id="logo-tagline"> Pizza Base </h2>
                </div>
            </div>
        </>
    )
}

export default EmailSent