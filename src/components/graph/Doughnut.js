import React, { useRef } from 'react';
import { Donut } from '@ant-design/charts';
import { map } from 'lodash';

const colors = ['#ffffff', '#ffd665', '#ff7ae0', '#17ef7c', "#7ae8ff", '#ff946b', '#2bef87', '#11D8b6']

const DoughnutGraph = ({ data, title }) => {

    let total = 0;
    _.map(data, obj => total += obj.value)

    const config = {
        forceFit: true,
        radius: 1,
        innerRadius: 0.82,
        padding: 'auto',
        data,
        color: colors,
        statistic: {
            visible: true,
            content: {
                name: title,
                value: total
            },
        },
        label: {
            visible: false,
        },
        angleField: 'value',
        colorField: 'type',
        legend: {
            visible: false,
            offsetX: 10,
            text: {
                style: {
                    color: 'white',
                }
            },
            title: {
                style: {
                    color: 'white',
                }
            }
        },
        pieStyle: (v) => {
            return {};
        },
    };

    const ref = useRef();

    return (
        <div className="donut">
            <Donut {...config} chartRef={ref} />
            <div className="donut-legend">
                {data.map((item, index) => {
                    return (
                        <div className="donut-legend__item" key={index}>
                            <div className="dots" style={{ backgroundColor: colors[index] }}></div>
                            <div>{item.type}</div>
                        </div>
                    )
                })}
            </div>
        </div >
    );
};
export default DoughnutGraph;