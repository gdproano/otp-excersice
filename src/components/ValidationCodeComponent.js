import React, { useState, useRef, createRef } from 'react';
import logo from '../assets/images/icon.png';
import Input from './common/Input';
const DIGITS = 6
const FILEDS = new Array(6).fill(1)

const checkReference = (ref, index) => !!(ref && ref.current && ref.current[index])

const ValidationComponent = ({ email = 'exxxxxiz@gmail.com', phone = '09xxxxx651' }) => {

    const [data, setData] = useState([])
    const refs = useRef(FILEDS.map(() => createRef()));

    return <div className="validation-section">
        <img src={logo} className="validation-icon" alt="logo" />
        <p className="title">Código de validación</p>
        <p className="description">Ingrese el código de {DIGITS} dígitos que hemos enviado a tu correo electrónico {email} y celular {phone}</p>
        <div className="inputs">
            {
                FILEDS.map((_, i) => <Input key={i} inputReference={refs.current[i]} id={i} value={data[i]}
                    minLength={1} maxLength={1} inputCustomClass="input-secret"
                    onChange={(_, value) => {
                        if (checkReference(refs, i + 1) && value !== '')
                            refs.current[i + 1].current.focus()
                        data[i] = value
                        setData([...data])
                    }}
                    onPressBack={_ => {
                        if (checkReference(refs, i - 1)) refs.current[i - 1].current.focus()
                    }} />)
            }

        </div>
        <p>El código expira en {}</p>
    </div>
}
export default ValidationComponent