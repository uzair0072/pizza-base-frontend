import React from "react";
import Buttons from "../../components/buttons/buttons.js";

function SignUp() {
    return (
        <>
            <div>
                <Buttons
                    label={"Create Account"}
                    id={"btn-gradient"}
                    height={50}
                    width={417}
                    variant={'primary'}
                />
            </div>
        </>
    )
}

export default SignUp