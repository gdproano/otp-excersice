import React, { useState, useRef, createRef, useEffect } from 'react';
import logo from '../assets/images/icon.png';
import Input from './common/Input';
import { transformCounter } from '../helpers/helpers';
const DIGITS = 6
const FILEDS = new Array(DIGITS).fill(1)
const MAX_SECONDS = 10

const checkReference = (ref, index) => !!(ref && ref.current && ref.current[index])

const ValidationComponent = ({ email = 'exxxxxiz@gmail.com', phone = '09xxxxx651' }) => {

    const [data, setData] = useState([])
    const refs = useRef(FILEDS.map(() => createRef()))
    const [timeLeft, setTimeLeft] = useState(MAX_SECONDS)

    useEffect(() => {
        let timer = startTimer(timeLeft)
        if (timeLeft === 0) stopCounter(timer)
    });

    const startTimer = time => setTimeout(_ => setTimeLeft(time - 1), 1000)

    const stopCounter = timer => clearTimeout(timer)

    const isValidInformation = data.length === DIGITS && data.every(item => item !== '') && timeLeft > 0
    const continueStyles = `continue-button ${isValidInformation ? '' : 'btn-disabled'}`;

    return <div className="validation-section">
        <img src={logo} className="validation-icon" alt="logo" />
        <p className="title">Código de validación</p>
        <p className="description">Ingrese el código de {DIGITS} dígitos que hemos enviado a tu correo electrónico {email} y celular {phone}</p>
        <div className="info inputs">
            {
                FILEDS.map((_, i) => <Input key={i} inputReference={refs.current[i]} id={i} value={data[i]}
                    minLength={1} maxLength={1} inputCustomClass="input-secret" type="number"
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
        <div className="info">
            <p className="timer">El código expira en {transformCounter(timeLeft)}</p>
            <p className="resend-code" onClick={() => setTimeLeft(MAX_SECONDS)}>Reenviar código</p>
        </div>
        <div className="info options">
            <button className="cancel-button">Cancelar</button>
            <button className={continueStyles} disabled={!isValidInformation}>Continuar</button>
        </div>
    </div>
}
export default ValidationComponent