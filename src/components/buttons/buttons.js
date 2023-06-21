import React from "react";
import "./buttons.css";
import googleicon from "..//..//assets/icons/google-icon.svg";
import btnedit from "..//..//assets/icons/btn-edit.svg";
import addicon from "..//..//assets/icons/add-icon.svg";


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
    else if (variant === 'add') {
        btnClassName = 'btn-add';
    }
    else if (variant === 'edit') {
        btnClassName = 'btn-edit';
    }
    else if (variant === 'cart-btn') {
        btnClassName = 'btn-add-to-cart';
    }
    else {
        style.backgroundColor = secondary;
    }

    return (
        <>
            <button style={style} className={btnClassName} id={id}>
                {variant === 'google' ? <img src={googleicon} id="google-svg" alt="google-icon" /> : <div></div>}
                {label}
                {variant === 'edit' ? <img src={btnedit} id="edit-svg" alt="edit-icon" /> : <div></div>}
                {variant === 'add' ? <img src={addicon} id="add-svg" alt="add-icon" /> : <div></div>}
            </button>
        </>
    )
}

export default Buttons