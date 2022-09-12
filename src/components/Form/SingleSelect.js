import React from 'react'
import Select from 'react-select'
import { ErrorMessage } from 'formik'
import cl from 'classnames'

import './InputStyle.less'

const SingleSelect = (props) => {

    const { options, name, label, onBlur, placeholder, err, className, isClearable, menuPlacement, readOnly, isLoading, value, defaultValue, disabled, isMulti } = props

    const onChange = (option) => {
        if (option == null) {
            props.onChange(props.name, "")
        } else {
            props.onChange(props.name, isMulti ? option : option.value)
        }
    }

    return (
        <div className={cl('SingleSelect SingleSelect-wrapper', className ? className : '')}>
            {
                label !== undefined
                    ? <label htmlFor={name}> {label} </label>
                    : ''
            }

            <Select
                closeMenuOnSelect={true}
                name={name}
                value={value}
                isMulti={isMulti}
                options={options}
                onChange={onChange}
                isClearable={isClearable == false ? isClearable : true}
                onBlur={onBlur}
                disabled={disabled}
                isSearchable={true}
                menuPlacement={menuPlacement}
                className={cl('_single-select',
                    (err) ? 'error_input' : '')}
                classNamePrefix='_single-select'
                placeholder={placeholder || ''}
                isDisabled={readOnly}
                isLoading={isLoading}
                defaultValue={defaultValue}
            />
            <ErrorMessage name={name}>
                {errorMessage => {
                    return <div className='error_message'> {errorMessage} </div>
                }}
            </ErrorMessage>

        </div>
    )
}
export default SingleSelect