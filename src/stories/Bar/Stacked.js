/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";

class Stack extends Component {
  render() {
    const name = text("Title", "Stacked Bar Plot");
    const xlabel=text("x-axis label","Month") ;
    const ylabel=text("y-axis label","Percent") ;
    const label = 'Color1';
    const defaultValue = '#ffd31d';
    const color1 = color(label, defaultValue);
    const label2 = 'Color2';
    const defaultValue2 = '#d9455f';
    const color2 = color(label2, defaultValue2);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 1, options);
    const label3= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label3, -45 , options2);
  
    const value3 = text("Orientation", "v");
    const gap = number("Bargap", 0.2);
    const width = number("Bar Width", 0.7);
    const legend1=text("Legend text of plot-1","2016 sales");
    const legend2=text("Legend text of plot-2","2017 sales");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend', options9, 1);
    return (
      <div className="body">
      <h1>
      Stacked Column
      </h1>
      <Plot className="plot"
        data={[
            {
              x: ["Jan", "Feb", "Mar", "April","May", "June"],
              y: [20, 34, 23, 15, 8, 37],
              name: '2016 Sales ',
              type: 'bar',
              name: `${legend1}` ,
             width: `${width}` ,
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             
             
              marker: {
                 opacity:`${value2}`,
                 color: `${color1}`
                  },
            
                 orientation: `${value3}`
              },
              {
                x: ["Jan", "Feb", "Mar", "April","May", "June"],
              y: [42, 18, 29,30, 51, 11],
              name: '2017 Sales',
              type: 'bar',
              name: `${legend2}` ,
             width: `${width}` ,
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             
              marker: {
                 opacity:`${value2}`,
                 color: `${color2}`
                  },
            
                 orientation: `${value3}`
              }
        ]}
        layout={ {width: 750, height: 520,showlegend: true,
        
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
  },bargap:`${gap}`, barmode:'relative',  title:`${name}`} }
      />
      
      </div>
    );
  }
}

export default Stack;