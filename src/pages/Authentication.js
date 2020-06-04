import React, {Component} from "react";
import OtpForm from "../components/OtpForm";
import Card from "../components/Card";
import Header from "../components/Header";

class Authentication extends Component {

    state = {
        form: {
            title: 'Código de validación',
            description: 'Ingresa el código de 6 digitos que hemos enviado a tu correo electronico exxxxxiz@gmail.com y celular 09xxxxx305',
        },
    }

    handleChange = e => {
        this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        })
    }

    render() {
        return (
            <div className="container">
                <div>
                    <Header
                        url_header={this.state.url_header}
                    />
                </div>

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