import React, {Component} from "react";
import ExerciseForm from "../components/ExerciseForm";
import Card from "../components/Card";

class ExerciseNew extends Component {

    state = {
        form: {
            title: '',
            description: '',
            img: '',
            leftColor: '',
            rightColor: ''
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
                            <ExerciseForm
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

export default ExerciseNew;