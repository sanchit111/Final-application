/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";


class Population extends Component {
  render() {
    const name = text("Title", "Population Pyramid");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Color1';
    const defaultValue ='#ffd31d';
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
    const value3 = text("Orientation", "h");
    const gap = number("Bargap", 0.1);
    const width = number("Bar Width", 7);

    const legend1=text("Legend text of plot-1","Men");
    const legend2=text("Legend text of plot-2","Women")
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend', options9, 1);
    return (
        <div className="body">
      <Plot className="plot"
        data={[{
                  
                 type: 'bar', 
                 name: `${legend1}` ,
             width: `${width}` ,
             type: 'bar',
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             
             
                 x: [600, 623, 653, 650, 670, 578, 541, 360, 312, 170], 
                 y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                 marker: {
                 opacity:`${value2}` ,
                 color: `${color1}`
                  },
            
                 orientation: `${value3}` 
               },
               {
                type: 'bar', 
                 name: `${legend2}` ,
             width: `${width}` ,
             type: 'bar',
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             
                x: [-600, -623, -653, -650, -670, -578, -541, -411, -322, -230], 
                y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                marker: {
                 opacity:`${value2}` ,
                 color: `${color2}`
                  },
            
                 orientation: `${value3}` 
            }
            
        ]}
        
        layout={ {width: 750,showlegend: true,
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
  }, height: 520, bargap: `${gap}`, barmode: 'relative', title:`${name}`} }
      />
      
      </div>
    );
  }
}

export default Population;