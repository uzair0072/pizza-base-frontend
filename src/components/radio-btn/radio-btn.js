import React, { useState } from 'react';
import "./radio-btn.css";
import deleteimg from "..//..//assets/icons/radio-btn-delete.svg"

const DeleteAccountButton = () => {
    const [isPromptOpen, setIsPromptOpen] = useState(false);

    const handleRadioButtonClick = () => {
        setIsPromptOpen(true);
    };

    const handlePromptConfirmation = () => {
        // Perform the delete account action here
        setIsPromptOpen(false);
    };

    const handlePromptCancel = () => {
        setIsPromptOpen(false);
    };

    return (
        <div>
            <input
                type="radio"
                value="delete"
                onClick={handleRadioButtonClick}
            />
            {isPromptOpen && (
                <div className="prompt">
                    <div className="prompt-content">
                        <p>Are you sure you want to delete your account?</p>
                        <img src= {deleteimg} id='delete' alt='del-icon'/> <br></br> <br></br>
                        <button id='cancel' onClick={handlePromptCancel}>Cancel</button>
                        <button id='delete' onClick={handlePromptConfirmation}>Delete account</button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default DeleteAccountButton;
