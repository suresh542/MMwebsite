import React, { useState } from 'react';
import { ErrorMessage } from "formik";
import { Radio } from "antd";
import cl from "classnames";

import './InputStyle.less'

const RadioInput = (props) => {

    const { value, name, onChange, onBlur, label, err, options, defaultValue, disabled } = props;

    return (
        <div className="radio-wrapper">
            {!(err) ? <label htmlFor={name}>{label}</label> : ""}
            <ErrorMessage name={name}>
                {errorMessage => {
                    return (
                        <div className="error_message">{errorMessage}</div>
                    )
                }}
            </ErrorMessage>
            <Radio.Group name={name} value={value} onChange={onChange} onBlur={onBlur} disabled={disabled}
                defaultValue={defaultValue} className={cl((err && error) ? 'error_input' : "")}>
                {options.map((item, index) => (
                    <Radio value={item.value} key={index}>{item.label}</Radio>
                ))}
            </Radio.Group>
        </div>
    );
}

export default RadioInput;