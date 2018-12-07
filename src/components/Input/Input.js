import React from 'react';
import './Input.css';

const Input = (props) => {
    let inputElement = null;

    switch (props.elementType) {
        case ('input'):
            inputElement = <input
            className='form-control'
            value={props.value}
            onChange={props.changed}
            placeholder={props.inputPlaceholder}
            name={props.inputName} />;
            break;
        case ('textarea'):
            inputElement = <textarea
            value={props.value}
            onChange={props.changed} />;
            break;
        case ('select'):
            inputElement = (
            <select
                value={props.value}
                onChange={props.changed} >
                {props.elementConfig.options.map(option => (
                <option key={option.value} value={option.value}>
                    {option.displayValue}
                </option>
                ))}
            </select>
            )
        break;
        case ('password'):
            inputElement = <input
                    className='form-control'
                    type='password'
                    onChange={props.changed}
                    placeholder={props.inputPlaceholder}
                    name={props.inputName}
                    />
        break;
        default:
            inputElement = <input
            {...props.elementConfig}
            value={props.value || ''}
            onChange={props.changed} />
    }

    return (
        <div>
            <label className='Label'>{props.label}</label>
            {inputElement}
        </div>
    )
};
    

export default Input;