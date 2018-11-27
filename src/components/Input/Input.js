import React, { Fragment } from 'react';
import './Input.css';

const Input = (props) => (

    <Fragment>
        <label className='Label'>{props.label}</label>
        <input
            className='InputElement'
            type={props.inputType}
            name={props.inputName}
            placeholder={props.inputPlaceholder}
            onChange={props.changed}
            >
        </input>
    </Fragment>
    
)

export default Input;