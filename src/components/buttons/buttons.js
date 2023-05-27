import React from "react";
import "./buttons.css";
import googleicon from "..//..//assets/icons/google-icon.svg";
import btnedit from "..//..//assets/icons/btn-edit.svg";
import btndel from "..//..//assets/icons/btn-del.svg";


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
    else if (variant === 'edit') {
        btnClassName = 'btn-edit';
    }
    else if (variant === 'delete') {
        btnClassName = 'btn-del';
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
                {variant === 'delete' ? <img src={btndel} id="del-svg" alt="del-icon" /> : <div></div>}
            </button>
        </>
    )
}

export default Buttons