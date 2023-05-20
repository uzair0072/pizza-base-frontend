import React from "react";
import "./buttons.css";
import googleicon from "..//..//assets/icons/google-icon.svg";

function Buttons({ variant, id, label, width, height }) {

    // border and borderRadius != props
    var btnClassName = 'btn-primary';
    const primary = '#FFE500';
    const secondary = '#FCA28F';

    let style = {
        width: width,
        height: height,
    };

    if (variant === 'primary') {
        style.backgroundColor = primary;
    }
    else if (variant === 'google') {
        btnClassName = 'btn-google';
    }
    else {
        style.backgroundColor = secondary;
    }

    return (
        <>
            <button style={style} className={btnClassName} id={id}>
                {variant === 'google' ? <img src={googleicon} id="google-svg" alt="google-icon" /> : <div></div>}
                {label}
            </button>
        </>
    )
}

export default Buttons