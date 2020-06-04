import React, {Component} from "react";

// const Input = ({value, onChange, fieldType, fieldName, ref}) => {
//
//     return (
//         <div className='col p-1'>
//             <input
//                 type={fieldType}
//                 className="form-control text-center"
//                 placeholder=""
//                 maxLength="1"
//                 name={fieldName}
//                 onChange={onChange}
//                 value={value}
//                 ref={ref}
//             />
//         </div>
//     );
// }

class Input extends Component {
    constructor(props) {
        super(props);
        this.textInput = React.createRef();
    }

    focusTextInput = () => {
        this.textInput.current.focus();
    }

    render() {

        const {value, onChange, fieldType, fieldName, onKeyUp} = this.props;
        return (
            <div className='col p-1'>
                <input
                    type={fieldType}
                    className="form-control text-center"
                    placeholder=""
                    maxLength="1"
                    name={fieldName}
                    onChange={onChange}
                    value={value}
                    ref={this.textInput}
                    onKeyUp={onKeyUp}
                />
            </div>
        );
    }
}

export default Input;