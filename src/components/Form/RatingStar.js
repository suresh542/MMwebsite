
import React, { useState } from 'react'
import { ErrorMessage } from 'formik'
import { Rate } from 'antd'
import cl from 'classnames'
import Svg from '../svg'

import './InputStyle.less'

const RatingStar = (props) => {
    const { id, value, name, type, onChange, icon, onBlur, label, err, disabled, maxLength, minLength, placeholder } = props;

    const [updateType, setUpdatedType] = useState(props.type)

  

    return (
        <div>
            {
                label !== undefined
                    ? <label htmlFor={name}> {label} </label>
                    : ''
            }

            <Rate
                onChange={onChange}
                disabled={disabled}
                value={value}
                name={name}
                className={cl((err) ? 'error_input' : '')} 
                />

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

export default RatingStar