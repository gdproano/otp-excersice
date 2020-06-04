import React from "react";

const Button = ({text, onClick, className, disabled = false}) => {

    return (
        <button type="button" className={`btn col ${className}`} onClick={onClick} disabled={disabled}>
            {text}
        </button>
    );
}

export default Button;