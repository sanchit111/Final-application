/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';



/* JSON Editor styling */


import {text, color,number,select} from "@storybook/addon-knobs";




class Bar extends Component {
  render() {
    const name = text("Title", "Basic Bar Plot");
    const xlabel=text("x-axis label","x-axis") ;
    const ylabel=text("y-axis label","y-axis") ;
    const label = 'Color';
    const defaultValue = '#721b65';
    const value = color(label, defaultValue);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
   const value2 = number(label1, 0.6, options);
   const label2= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label2, -45 , options2);
   
   
  const options10 = ['v', 'h']
  const defaultValue4 = 'v';    
  const value3 = select("Orientation", options10, defaultValue4);
    const gap = number("Bargap", 0.2);
    const width = number("Bar Width", 4.0);
    const legend=text("Legend text","Label");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);
 
    
    return (
     
      <div className="body">
      <Plot className="plot"
        data={[
            {
              x: [20, 40, 60, 80, 100],
              y: ['A', 'B', 'C', 'D', 'E'],
             name: `${legend}` ,
             width: `${width}` ,
             type: 'bar',
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}` }
            
        ]}
        layout={ {width: 750, height: 600,  showlegend: true,
       
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
  }, title: `${name}`, 
   bargap :`${gap}`} }
      />
      
      </div>
    );
  }
}

export default Bar;
