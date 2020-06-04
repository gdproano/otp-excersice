import React, {Component} from "react";

class Input extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    focusTextInput = () => {
        this.textInput.current.focus();
    }

    validNumber = (e) => {
        const keyValue = e.target.value;
        if (/^\d$/.test(keyValue)) {
            this.props.onChange(e);
            e.preventDefault();
        } else {
            e.target.value = ''
            this.props.onChange(e);
        }


    }

    render() {
        const {value, fieldType, fieldName, onKeyDown} = this.props;
        return (
            <div className='col p-1'>
                <input
                    type={fieldType}
                    className="form-control text-center"
                    maxLength="1"
                    name={fieldName}
                    onChange={this.validNumber}
                    value={value}
                    ref={this.textInput}
                    onKeyDown={onKeyDown}
                />
            </div>
        );
    }
}

export default Input;