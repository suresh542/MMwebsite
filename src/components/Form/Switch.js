import React from 'react'
import { Switch } from 'antd'

import './InputStyle.less'

const SwitchButton = ({ onChange, checkedChildren, unCheckedChildren, label, value, disabled }) => {
    return (
        <div className="switch switch-wrapper">
            <label>{label !== undefined ? label : "Status"}</label>
            <Switch
                checkedChildren={checkedChildren}
                unCheckedChildren={unCheckedChildren}
                defaultChecked
                onChange={onChange}
                checked={value}
                disabled={disabled}
            />
        </div>
    )
}

export default SwitchButton
