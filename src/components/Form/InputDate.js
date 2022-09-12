import React from 'react'
import { DatePicker } from 'antd'
import cl from 'classnames'
import { ErrorMessage } from 'formik'
import moment from 'moment';

import './InputStyle.less'

const InputDate = (props) => {

    const { options, name, label, onChange, onBlur, placeholder, disabledDate, value, err, disabled, suffixIcon, format, disabledType } = props

    const dateFormat = 'MM/DD/YYYY'

    const disabledDateValue = (currentDate) => {
        // Can not select days before today and today
        if (disabledType === "PAST")
            return currentDate < moment(new Date() - 1);
        else if (disabledType === "FUTURE")
            return currentDate && currentDate > moment(new Date()).endOf('day');
    }

    return (
        <div className='inputDate inputDate-wrapper'>
            {
                label !== undefined
                    ? <label htmlFor={name}> {label} </label>
                    : ''
            }

            <DatePicker
                name={name}
                value={value === "" || !value ? null : moment(value, dateFormat)}
                options={options}
                onChange={onChange}
                disabledDate={disabledDate}
                suffixIcon={suffixIcon}
                disabled={disabled}
                format={format ? format : dateFormat}
                // disabled={disabled ? true : false}
                placeholder={placeholder || ''}
                onBlur={onBlur}
                className={cl((err) ? 'error_input' : '')}
            />

            <ErrorMessage name={name}>
                {errorMessage => {
                    return (
                        <div className='error_message'>
                            {errorMessage}
                        </div>
                    )
                }}
            </ErrorMessage>
        </div>
    )
}
export default InputDate