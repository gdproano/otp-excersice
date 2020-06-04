import React, {Component} from "react";
import OtpForm from "../components/OtpForm";
import Card from "../components/Card";

class Authentication extends Component {

    state = {
        form: {
            title: 'Código de validación',
            description: 'Ingresa el codigo de 6 digitos que hemos enviado a tu correo electronico exxxxxiz@gmail.com y celular 09xxxxx305',
            img: 'https://www.iconsdb.com/icons/preview/orange/checked-checkbox-xxl.png',
            digitOne: '',
            digitTwo: '',
            digitThree: '',
            digitFour: '',
            digitFive: '',
            digitSix: '',
        }
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    handleSubmit = e => {
        e.preventDefault()
        console.log(this.state)
    }

    render() {
        return (
            <div className="container">


                <div className="row">
                    <div className="col"/>
                    <div className="col">
                        <div className="col-form-label-sm">
                            <Card
                                {...this.state.form}
                            />
                        </div>
                    </div>
                    <div className="col"/>
                </div>

                <div className="row">
                    <div className="col"/>
                    <div className="col">
                        <div className="col-form-label-sm">
                            <OtpForm
                                onChange={this.handleChange}
                                onSubmit={this.handleSubmit}
                                form={this.props}
                            />
                        </div>
                    </div>
                    <div className="col"/>
                </div>
            </div>


        );
    }
}

export default Authentication;