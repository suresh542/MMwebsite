
import React, { useState, useEffect,useRef } from 'react';
import { Column } from '@ant-design/charts';
import { moment } from 'moment';
import './BarGraph.less'
const BarGraph = (props) => {
  console.log(props);
debugger;
    // let total = 0;
    // _.map(data, obj => total += obj.value)

      var config = {
  
        data: props.data,
        width: 1000,
        height:461,
        autoFit: false,
        xField: props.page=="Insight" ? 'orderDate': 'orderDate' ,
        yField: 'revenue',
      columnWidthRatio:5,

        label : { 
          position : 'middle' , 
          style : { 
            fill : '#000000' , 
            opacity : 0.6 , 
          } ,
        } ,
        meta: {
          type: { alias: props.page=="Insight" ? 'orderDate': 'orderDate' },
          sales: { alias: 'revenue' },
        },
        xAxis: {
            visible: true,
            line: {
                visible: true
            },
            title: {
                visible: false
            }
        },
        yAxis: {
            visible: true,
            line: {
                visible: true
            },
            title: {
                visible: false
            }
        },
        color: props.page=="Insight" ? '#f9dce0':'#ffd665',

    
      };


    return (
        <div className="bargraph" >
            <Column {...config} />
        </div >
    );
};
export default BarGraph;
