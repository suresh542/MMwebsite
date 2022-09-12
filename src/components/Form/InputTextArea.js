import React, { useState } from 'react'
import { ErrorMessage } from 'formik'
import { Input } from 'antd'
import cl from 'classnames'
import Svg from '../svg'

const { TextArea } = Input;

import './InputStyle.less'

const InputTextArea = (props) => {
    const { id, value, name, type, onChange, icon, onBlur, label, err, disabled, maxLength, minLength, placeholder, rows } = props;

    const [updateType, setUpdatedType] = useState(props.type)

    const passwordViewHandler = () => {
        if (updateType === "text")
            setUpdatedType("password")
        else
            setUpdatedType("text")
    }

    return (
        <div className='InputTextArea InputTextArea-wrapper'>
            {
                label !== undefined
                    ? <label htmlFor={name}> {label} </label>
                    : ''
            }

            <TextArea
                id={id && id}
                name={name}
                disabled={disabled}
                type={updateType || ''}
                value={value}
                rows={rows ? rows : 4}
                placeholder={placeholder}
                onChange={onChange}
                onBlur={onBlur}
                autoComplete="off"
                className={cl((err && error) ? 'error_input' : '')}
                style={{ padding: icon !== undefined ? '0 0 0 35px' : "10px" }}
                maxLength={maxLength}
                minLength={minLength}

            />

            {
                type === "password"
                &&
                <div className="password-eye"
                    onClick={() => passwordViewHandler()}>
                    <Svg.Eye isActive={updateType === "text"} primaryColor={"#7436ff"} />
                </div>
            }

            <ErrorMessage name={name}>
                {errorMessage => {
                    return (
                        <p className='error_message'>
                            {errorMessage}
                        </p>
                    )
                }}
            </ErrorMessage>
        </div>
    )
}

export default InputTextArea