import React, {Component} from "react";
import Input from "./Input";
import Button from "./Button";


class OtpForm extends Component {

    constructor() {
        super();
        this.num1 = React.createRef();
        this.num2 = React.createRef();
        this.num3 = React.createRef();
        this.num4 = React.createRef();
        this.num5 = React.createRef();
        this.num6 = React.createRef();
    }

    state = {
        form: {
            value: '',
        },
        timer: 120000
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })

        console.log(e.key)
        if (e.target.name === 'num2' && !!e.target.value) {

            this.num5.current.focusTextInput();
        }
        // this.num6.current.focusTextInput();
    }

    startTimer = (duration) => {
        var timer = duration, minutes, seconds;
        this.interval = setInterval(() => {
            minutes = parseInt(timer / 60, 10);
            seconds = parseInt(timer % 60, 10);

            minutes = minutes < 10 ? "0" + minutes : minutes;
            seconds = seconds < 10 ? "0" + seconds : seconds;

            let timer1 = minutes + ":" + seconds;
            this.setState({
                timer: timer1
            })

            if (timer > 0) {
                --timer;
            }
        }, 1000);

    }

    resetTimer = () => {
        clearInterval(this.interval)
        this.startTimer(120)
    }

    handlerKeyCode = e => {
        if (e.keyCode === 8 && e.currentTarget.name === 'num2' && !e.currentTarget.value) {
            this.num1.current.focusTextInput();
        }
    }

    componentDidMount() {
        this.startTimer(120)
    }

    render() {


        return (
            <div>
                <div className="row">
                    <Input
                        onChange={this.handleChange}
                        form={this.state.form.num1}
                        fieldType='text'
                        fieldName='num1'
                        ref={this.num1}
                        onKeyUp={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        form={this.state.form.num2}
                        fieldType='text'
                        fieldName='num2'
                        ref={this.num2}
                        onKeyUp={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        form={this.state.form.num3}
                        fieldType='text'
                        fieldName='num3'
                        ref={this.num3}
                        onKeyUp={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        form={this.state.form.num4}
                        fieldType='text'
                        fieldName='num4'
                        ref={this.num4}
                        onKeyUp={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        form={this.state.form.num5}
                        fieldType='text'
                        fieldName='num5'
                        ref={this.num5}
                        onKeyUp={this.handlerKeyCode}
                    />
                    <Input
                        onChange={this.handleChange}
                        form={this.state.form.num6}
                        fieldType='text'
                        fieldName='num6'
                        ref={this.num6}
                        onKeyUp={this.handlerKeyCode}
                    />

                </div>
                <div className="row">
                    <div className="col">El codigo expira en {this.state.timer}</div>
                    <div className="col text-right">
                    <span onClick={this.resetTimer} className='pointer'>
                        text2
                    </span>
                    </div>
                </div>
                <div className="row mt-5">
                    <Button
                        text='Cancelar'
                        style='btn-secondary mr-4'
                        onClick={() => console.log("CLick!")}
                    />
                    <Button
                        text='Continuar'
                        style='btn-primary'
                        onClick={() => console.log("CLick!")}
                        disabled={true}
                    />
                </div>
            </div>

        );
    }

}

export default OtpForm;