/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, number,select,color} from "@storybook/addon-knobs";








class Pie extends Component {
  render() {
    const name = text("Title", "Pie Chart");
const label2 = 'Hole';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
   const value2 = number(label2, 0, options);  
   const color1=color("Color 1","red");
    const color2=color("Color 2","yellow");
    const color3=color("Color 3","green");
    const colorall=[color1,color2,color3];
    const options1 = ["clockwise", "counterclockwise"]  
    const dir = select('Direction', options1, "counterclockwise");
    const options5 = {
      range: true,
      min: -360,
      max: 360,
      step: 20,
   };
   const rotate = number("Rotate slice", 0, options5);  
   
    const options2 = ['inside', 'outside','auto', 'none']
const defaultValue1 = 'outside';    
const value1 = select("Text position", options2, defaultValue1);
    const options3 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options3, 1);
    const options4 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options4, 1);
    
    
      
      
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              values: [30, 51, 19],
              labels: ['Summer', 'Winter',  'Autumn'],
              hovertemplate: 'Value of Percentage : %{value}<br> Value of Season : %{label}<br> ',
              type: 'pie',
              name:'Season sales',
              hoverinfo: `${value1}`,
              hole:`${value2}`,
              marker:{ colors:colorall},
              texttemplate:"Percentage sales: %{value}",
              textposition:`${value1}`,
              direction:`${dir}`,
              rotation:`${rotate}`
              
               
              
              
            }
        ]}
        layout={ {width: 750, height: 520,showlegend: true,
legend: {
 x: `${xlegend}`,
 y:`${ylegend}`
}, title:`${name}`} }
      />
      </div>
    );
  }
}

export default Pie;