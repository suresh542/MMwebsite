import React, { useState } from 'react';
import moment from "moment";
import { Area } from "@ant-design/charts";
import Loading from '../Loading/Loading';
import RadioInput from '../Form/RadioInput';

import './graph.less'

const LineChart = ({ data, isLoading, selectedMonth, onChangeGraph }) => {

    const getCurrentMonth = () => {
        var date = new Date()
        return selectedMonth == (date.getMonth() + 1)
    }

    const [showVal, setShowVal] = useState(data[data.length - 1]);
    let [lastSelectedType, setLastSelectedType] = useState("")

    if (!getCurrentMonth()) {
        if (lastSelectedType !== "" && lastSelectedType.length > 2)
            setLastSelectedType("")
    }

    if (data.length == 0) {
        if (showVal !== undefined)
            setShowVal(undefined)
    }

    const yAxisLabel = "Effective Hour"
    const xAxisLabel = "Date"

    const handleRadioChange = (e) => {
        const { value } = e.target
        setLastSelectedType(value)
        onChangeGraph(value)
    }

    const renderWidgets = () => {
        return (
            <div className="line-chart__widgets">
                {/* DOD */}
                <div className="line-chart__widgets-item">
                    <h4>Date of Duty</h4>
                    <p>
                        {
                            showVal
                                ? showVal.date
                                    ? showVal.date
                                    : "--"
                                : "--"
                        }
                    </p>
                </div>
                {/* Login Time */}
                <div className="line-chart__widgets-item">
                    <h4>Login Time</h4>
                    <p>
                        {
                            showVal
                                ? showVal.FromDate
                                    ? moment(showVal.FromDate, 'YYYY-MM-DDThh:mm:ss').format('HH:mm A')
                                    : "--"
                                : "--"
                        }
                    </p>
                </div>
                {/* Logout Time */}
                <div className="line-chart__widgets-item">
                    <h4>Logout Time</h4>
                    <p>
                        {
                            showVal
                                ? showVal.ToDate
                                    ? moment(showVal.ToDate, 'YYYY-MM-DDThh:mm:ss').format('HH:mm A')
                                    : "--"
                                : "--"
                        }
                    </p>
                </div>
                {/* Predictive Logout */}
                <div className="line-chart__widgets-item">
                    <h4>Predictive Logout</h4>
                    <p>
                        {
                            showVal
                                ? showVal.PredictveTimeOut
                                    ? moment(showVal.PredictveTimeOut, 'YYYY-MM-DDThh:mm:ss').format('HH:mm A')
                                    : "--"
                                : "--"
                        }
                    </p>
                </div>
                {/* Working Time */}
                <div className="line-chart__widgets-item">
                    <h4>Working Time</h4>
                    <p>
                        {
                            showVal
                                ? showVal.TotalWorkingTime
                                    ? `${showVal.TotalWorkingTime.split(":")[0]} : ${showVal.TotalWorkingTime.split(":")[1]}`
                                    : '--'
                                : "--"
                        }
                    </p>
                </div>
                {/* Effective Time */}
                <div className="line-chart__widgets-item">
                    <h4>Effective Time</h4>
                    <p>
                        {
                            showVal
                                ? showVal.TotalEffectiveTime
                                    ? `${showVal.TotalEffectiveTime.split(":")[0]} : ${showVal.TotalEffectiveTime.split(":")[1]}`
                                    : '--'
                                : "--"
                        }
                    </p>
                </div>
            </div>
        )
    }

    const config = {
        data,
        padding: "auto",
        forceFit: true,
        xField: "date",
        yField: "time",
        color: ["#00ceab"],
        smooth: true,
        xAxis: {
            tickCount: 8,
            // label: {
            //     visible: true
            // },
            title: {
                visible: true,
                text: xAxisLabel
            }
        },
        yAxis: {
            tickInterval: 2,
            tickCount: 10,
            min: 0,
            max: 16,
            label: {
                visible: true
            },
            title: {
                visible: true,
                text: "Hours"
            }
        },
        onAreaMouseup: (...agrs) => {
        },
        tooltip: {
            custom: {
                customContent: (title, items) => {
                    setShowVal(items[0] ? items[0].data : "undefined");
                    return (
                        <div style={{ padding: '15px 10px' }}><b>Date: </b>{title}</div>
                    );
                }
            }
        }
    };

    return (
        <div className="line-chart">
            {
                isLoading
                    ? <div className="cs-graph" style={{ display: 'grid', placeItems: 'center' }}> <Loading /> </div>
                    : <>
                        {renderWidgets()}
                        <div className="cs-graph">
                            <Area {...config} />
                            <div className="cs-graph__tooltip">
                                <div className="dot"></div> {yAxisLabel}
                            </div>
                            {getCurrentMonth() &&
                                <div className="cs-graph__tooltip-action">
                                    <RadioInput
                                        name="last"
                                        value={lastSelectedType != undefined ? lastSelectedType : ""}
                                        onChange={(e) => handleRadioChange(e)}
                                        options={[
                                            { label: "Last Week", value: "WEEK" },
                                            { label: "Last Month", value: "MONTH" }
                                        ]}
                                    />
                                </div>}
                        </div>
                    </>
            }
        </div >
    )
};

export default LineChart