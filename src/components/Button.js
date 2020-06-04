import React from "react";

const Button = ({text, onClick, style, disabled = false}) => {

    return (
        <button type="button" className={`btn col ${style}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>

    );
}

export default Button;