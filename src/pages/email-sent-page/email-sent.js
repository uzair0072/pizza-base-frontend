import React from "react";
import "./email-sent.css";
import applogo from "..//..//assets/logo/app-logo.svg";
import Buttons from "../../components/buttons/buttons";
import "..//..//fonts/app-fonts.module.css";
import "..//..//configs/app-colors.module.css"
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"
import { Link } from "react-router-dom";

function EmailSent() {
    return (
        <>
            <div class="email-sent-pg-row">
                <div class="email-sent-pg-cl1">
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
                            <p> Didn't receive the link? <Link id="resend-pass" to=""> Resend </Link>
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