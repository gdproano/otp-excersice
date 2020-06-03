import React from 'react';
import logo from '../assets/images/icon.png';
const DIGITS = 6

const ValidationComponent = ({email = 'exxxxxiz@gmail.com', phone='09xxxxx651'}) => {
    return <div className="validation-section">
        <img src={logo} className="validation-icon" alt="logo" />
        <p className="title">Código de validación</p>
        <p className="description">Ingrese el código de {DIGITS} dígitos que hemos enviado a tu correo electrónico {email} y celular {phone}</p>
        
    </div>
}
export default ValidationComponent