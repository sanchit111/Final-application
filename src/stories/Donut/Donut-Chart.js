/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, number,select,array} from "@storybook/addon-knobs";




class Pie extends Component {
  render() {
    const label = 'Styles';
const defaultValue = ['red', 'green', 'yellow', 'blue'];
 
const value = array(label, defaultValue);
const name = text("Title", "Donut Chart");
const label1 = 'Hoverinfo';
const options1 = ['label', 'percent','label+percent', 'name', 'label+percent+name']
const defaultValue1 = 'label+percent+name';    
const value1 = select(label1, options1, defaultValue1);
const label2 = 'Hole';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label2, 0.2, options);  

    const options5 = {
      range: true,
      min: -360,
      max: 360,
      step: 20,
   };

   const options3 = ["clockwise", "counterclockwise"]  
   const dir = select('Direction', options3, "counterclockwise");
   const options2 = ['inside', 'outside','auto', 'none']
   const defaultValue3 = 'outside';    
   const value3 = select("Text position", options2, defaultValue1);
   const rotate = number("Rotate slice", 0, options5);  
   
   const options4 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options4, 1);
    const options6 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options6, 1);
      
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              values: [16, 15, 12, 6, 5, 4, 42],
              labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
              type: 'pie',
              name:'Season sales',
              hoverinfo: `${value1}`,
              hole:`${value2}`,
              rotation:`${rotate}`,
              textposition:`${value3}`,
              direction:`${dir}`,
              marker: {
             colors: `${value}`
              }

            },
            {
              values: [27, 11, 25, 8, 1, 3, 25],
              labels: ['US', 'China', 'European Union', 'Russian Federation', 'Brazil', 'India', 'Rest of World' ],
              type: 'pie',
              name:'Season sales',
              hoverinfo: `${value1}`,
              hole:`${value2}`,
              rotation:`${rotate}`,
              textposition:`${value3}`,
              direction:`${dir}`,
              marker: {
             colors: `${value}`
              }
            }
        ]}
        layout={ {width: 750, height: 520, title:`${name}`,
        legend: {
 x: `${xlegend}`,
 y:`${ylegend}`
}
        } }
      />
      </div>
    );
  }
}

export default Pie;