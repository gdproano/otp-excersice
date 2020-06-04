import React, {Component} from "react";
import Input from "./Input";
import Button from "./Button";
import '../styles/OtpForm.css'
import {TIMER, KEY_BACKSPACE, SEPARATOR_TWO_POINTS, STRING_ZERO, EMPTY_FORM} from '../constants/general';
import {getNameByParameters, validateEnableButton} from "../util/utils";


class OtpForm extends Component {

    constructor(props) {
        super(props);
        this.num1 = React.createRef();
        this.num2 = React.createRef();
        this.num3 = React.createRef();
        this.num4 = React.createRef();
        this.num5 = React.createRef();
        this.num6 = React.createRef();
    }

    state = {
        form: EMPTY_FORM,
        timer: 0,
        isValid: false
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
        this.doFocusAction(e);
        this.validateEnableButton();
    }

    validateEnableButton() {
        this.setState({
            isValid: validateEnableButton(this.state.form, this.state.timer)
        })
    }

    doFocusAction(e) {
        if (!!e.target.value) {
            this[getNameByParameters(e.target.name, true)].current.focusTextInput();
        }
    }

    startTimer = (duration) => {
        let timer = duration, minutes, seconds;
        this.interval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? STRING_ZERO + minutes : minutes;
            seconds = seconds < 10 ? STRING_ZERO + seconds : seconds;

            let timerMinutesSeconds = minutes + SEPARATOR_TWO_POINTS + seconds;
            this.setState({timer: timerMinutesSeconds})

            if (timer > 0) {
                --timer;
            } else {
                this.setState({isValid: false})
            }
        }, 1000);

    }

    resetTimer = () => {
        clearInterval(this.interval)
        this.startTimer(TIMER)
        this.setState({form: EMPTY_FORM, isValid: false})
    }

    handlerKeyCode = e => {
        if (e.keyCode === KEY_BACKSPACE && !e.currentTarget.value) {
            this[getNameByParameters(e.currentTarget.name, false)].current.focusTextInput();
        }
    }

    componentDidMount() {
        this.startTimer(TIMER)
    }

    render() {
        return (
            <div>
                <div className="row">
                    <Input
                        onChange={this.handleChange}
                        value={this.state.form.num1}
                        fieldType='text'
                        fieldName='num1'
                        ref={this.num1}
                        onKeyDown={this.validate}
                    />
                    <Input
                        onChange={this.handleChange}
                        value={this.state.form.num2}
                        fieldType='text'
                        fieldName='num2'
                        ref={this.num2}
                        onKeyDown={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        value={this.state.form.num3}
                        fieldType='text'
                        fieldName='num3'
                        ref={this.num3}
                        onKeyDown={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        value={this.state.form.num4}
                        fieldType='text'
                        fieldName='num4'
                        ref={this.num4}
                        onKeyDown={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        value={this.state.form.num5}
                        fieldType='text'
                        fieldName='num5'
                        ref={this.num5}
                        onKeyDown={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        value={this.state.form.num6}
                        fieldType='text'
                        fieldName='num6'
                        ref={this.num6}
                        onKeyDown={this.handlerKeyCode}
                    />

                </div>
                <div className="row">
                    <div className="col text-med">El codigo expira en {this.state.timer}</div>
                    <div className="col text-right  text-med">
                        <button type="button" className="btn btn-link btn-sm" onClick={this.resetTimer}>Reenviar
                            código
                        </button>
                    </div>
                </div>
                <div className="row mt-3">
                    <Button
                        text='Cancelar'
                        className='button-bp-cancel mr-4'
                        onClick={() => console.log("CLick Cancel!")}
                        disabled={false}
                    />
                    <Button
                        text='Continuar'
                        className='button-bp-continue'
                        onClick={() => console.log("Succesfully!")}
                        disabled={!this.state.isValid}
                    />
                </div>
            </div>

        );
    }

}

export default OtpForm;