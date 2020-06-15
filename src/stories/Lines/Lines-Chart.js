/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";

function rand() { 
    return Math.random();
  }


class Lines extends Component {
  render() {
    const name = text("Title", "Lines Chart");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Color1';
    const defaultValue ='#0a97b0';
    const color1 = color(label, defaultValue);
    const option = {
      range: true,
      min: -180,
      max: 180,
      step: 20,
   };
   const angle= number('x-axis tick angle', -45 , option);

    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
   const option1 = ["lines","lines+markers","none"]  
    const mode = select("Mode", option1, "lines+markers");
    const value = number(label1, 1, options);
    const label4 = 'X-Legend coordinates';
    const options4 = [0,0.5,1]  
    const xlegend = select(label4, options4, 1);
    const label5 = 'Y-Legend coordinates';
    
    const options5 = [0,0.5,1]  
    const ylegend = select(label5, options5, 1);
    const value2 = number("Line Width", 2);
    const size = number("Marker Size", 5);
    const legend1=text("Legend for Line Plot","2018 sales");
    const options3 = ["linear","spline","hv","vh","hvh","vhv"]  ;
    const shape = select("Line Shape", options3, "linear");
    const options6 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const dash= select("Dash style", options6, "solid");
    

    
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              y: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15].map(rand),
              hovertemplate: 'Value of y: %{y}<br>',
              mode:`${mode}`,
              name:`${legend1}`,
              line:{
                color: `${color1}`,
                width:`${value2}`,
                shape:`${shape}`,
                dash:`${dash}`
              },
              marker:{opacity: `${value}`,
              size:`${size}`}
              
              
            }
        ]}
        layout={ {width: 750, height: 520, showlegend:true,
          xaxis: {
    title: `${xlabel}`,
    
    tickangle: `${angle}`
  },
  yaxis: {
    title: `${ylabel}`,
    
  },legend: {
    x: `${xlegend}`,
    y:`${ylegend}`
  },title:`${name}`} }
      />
      
      </div>
    );
  }
}
export default Lines;