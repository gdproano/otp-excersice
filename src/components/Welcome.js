import React from "react";
import './styles/Welcome.css';

const Welcome = ({username}) => {
    return (
        <div className="container">
            <div className="Fitness-User-Info">
                <h1> Hola, {username}</h1>
                <p> Vamos hacerlo!</p>
            </div>
        </div>
    );

}
export default Welcome;