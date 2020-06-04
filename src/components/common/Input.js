import * as React from 'react'

const ERROR_REQUIRED = 'Campo requerido';
const ERROR_NUMBER_FORMAT = 'Formato número incorrecto';
const NUMBER_TYPE = 'number';
const PASSWORD = 'password';
const VALID_NUMBER_PATERN = /^\d+$/;

const isValidNumber = number => number !== '' && !VALID_NUMBER_PATERN.test(number)

export const keepOnlyNumberCharacters = (val = '') => {
    const numRegex = new RegExp(`\\d`, 'g');
    return (val.match(numRegex) || []).join('')
};

class Input extends React.Component {

    static defaultProps = {
        value: '',
        required: false,
        disabled: false,
        autocomplete: 'nope',
        minValue: null
    };

    onChange = (evt) => {
        const target = evt.target
        let value = target.value

        value = this.maxLength(value)
        const error = this.validateEmpty(value) || this.minValidation(value) || this.validateType(value) ||
            this.validateMinValue(parseInt(value))
        this.props.onChange(target.id, value, error)
    }

    onPressKey = (e) => {
        const { onPressBack, onPressEnter, value } = this.props
        if (e.keyCode === 13 && onPressEnter) {
            onPressEnter();
            return
        }
        if (e.keyCode === 8 && onPressBack && value === '') {
            onPressBack();
            return
        }
    }

    minValidation = (value) => {
        const minLength = this.props.minLength;
        return minLength && value.length < minLength ? `mínimo ${minLength} caracteres` : null;
    }

    maxLength = (val) => {
        const { type } = this.props;
        const maxLength = this.props.maxLength || 100;
        let value = val;
        if (type === NUMBER_TYPE) {
            value = keepOnlyNumberCharacters(value);
        }
        if (String(value).trim().length > maxLength) {
            return value.substr(0, maxLength);
        }
        return value;
    }

    validateEmpty = (value) => this.props.required && value === '' ? ERROR_REQUIRED : null;

    validateType = (value) => {
        switch (this.props.type) {
            case NUMBER_TYPE:
                return isValidNumber(value) ? ERROR_NUMBER_FORMAT : null;
            default:
                return null;
        }
    }

    validateMinValue = (value) => {
        const minValue = this.props.minValue || 0;
        return minValue != null && value <= minValue ? `Ingrese un valor mayor que ${minValue}` : null;
    }

    render() {
        const {
            id,
            value,
            required,
            disabled,
            minLength,
            type,
            autocomplete,
            inputCustomClass,
            readOnly,
            inputReference
        } = this.props;

        const inputClasses = [
            inputCustomClass
        ].join(' ');

        const inputType = type === PASSWORD ? PASSWORD : 'text';
        const inputMode = type === NUMBER_TYPE ? 'numeric' : 'text';
        return (
            <input id={id} type={inputType} ref={inputReference ? inputReference : null}
                className={inputClasses}
                required={required}
                disabled={disabled}
                value={value ? value : value === 0 ? value : ''}
                minLength={minLength}
                autoComplete={autocomplete}
                onKeyDown={this.onPressKey}
                inputMode={inputMode}
                readOnly={readOnly}
                onChange={e =>
                    this.props.onChange ?
                        this.onChange(e) : {}
                } />
        );
    }
}

export default Input;
