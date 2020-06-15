/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";

class Connected extends Component {
  render() {
    const name = text("Title", "Connected Scatter Plot");
    const xlabel=text("x-axis label","Year") ;
    const ylabel=text("y-axis label","Percentage increase") ;
    const label = 'Marker Color';
    const defaultValue ='#c70039';
    const color1 = color(label, defaultValue);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 1, options);
    const value = number("Marker Size", 12);
    const label2 = 'Line Color';
    const defaultValue2 ='#feb72b';
    const color2 = color(label2, defaultValue2);
    const value3 = number("Line Width", 2);
    const option = {
      range: true,
      min: -180,
      max: 180,
      step: 20,
   };
   const angle= number('x-axis tick angle', -45 , option);
   const legend1=text("Legend text","2018 sales");
    const options6 = ["linear","spline","hv","vh","hvh","vhv"]  ;
    const value6 = select("Line Shape", options6, "linear");
    const options7 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const value7 = select("Dash style", options7, "solid");
    const options5 = ["circle","square","diamond","triangle-up", "pentagon","hexagon", "octagon","cross","x","star","hourglass"];
    const value5= select("Marker Symbol", options5, "circle");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend', options9, 1);
    return (
      <div className="body">
      <h1>
      Connected Scatter Plot
       </h1>
      <Plot className="plot"
        data={[
          {
            x: [1,2,3,4,5,6,7,8,9],
            y: [1,7,3,6,2,5,4,2,6],
            type: 'lines+scatter',
            hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
            name: `${legend1}`,
             marker: {
              symbol: `${value5}`,
                 opacity:`${value2}` ,
                 color: `${color1}`,
                 size: `${value}`
                  },
             line:{
                color: `${color2}`,
                width:`${value3}`,
                shape:`${value6}`,
                dash:`${value7}`
              },

        }
        ]}
        layout={ {width: 750, height: 520,title:`${name}`,
        showlegend: true,
        xaxis: {
    title: `${xlabel}`,
    
    tickangle: `${angle}`
  },
  yaxis: {
    title: `${ylabel}`,
    
  },
  legend: {
    x: `${xlegend}`,
    y:`${ylegend}`
  }} }
      />
      
      </div>
      
    );
  }
}
export default Connected;