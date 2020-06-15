/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, number,select,array,color} from "@storybook/addon-knobs";








class Radar extends Component {
  render() {
    const name = text("Title", "Radar Chart");
    const label = 'Color1';
    const color1 = color(label, '#3da4ab'); 
    const color2 = color("Color 2", '#fe8a71');  
    const label1 = 'Fill';
    const options = ['tozeroy', 'tonexty', 'toself']
    const defaultValue = 'toself';  
    const value = select(label1, options, defaultValue);
    const value1 = 'Opacity';
    const options1 = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac = number(value1, 1, options1);
    const size = number("Marker Size", 8);
    const size1 = number("Line Width", 2);
    const hrange = number("Max Range of radial axis", 50);
    const lrange = number("Min Range of radial axis", 0);
    const range=[lrange,hrange];
    const label2 = 'Fill';
    const options2 = ["lines", "markers", "lines+markers", "toself", "none"]
    const defaultValue2 = 'toself';  
    const mode = select(label2, options2, defaultValue2);
    const legend1=text("Legend for Plot-1","Group-A") ;
    const legend2=text("Legend for Plot-2","Group-B") ;
    const options5 = [0,1]  
    const xlegend = select('X-Legend coordinates', options5, 1);
    const options6 = [0,1]  
    const ylegend = select('Y-Legend coordinates', options6, 1);
     
    
    
    
      
    return (
        <div className="body">
        <Plot className="plot"
          data={[
            {
                 type: 'scatterpolar',
                 r: [39, 28, 8, 7, 28, 39],
                 theta: ['A','B','C', 'D', 'E', 'A'],
                 fill: `${value}`,
                 mode: `${mode}`,
                 name: `${legend1}`,
                 marker:{
                     color:`${color1}`,
                     opacity:`${opac}`,
                     size:`${size}`
                 
               },
               line:{
                     color:`${color1}`,
                     opacity:`${opac}`,
                     width:`${size1}`
                 
               }},
               {
                   type: 'scatterpolar',
                   r: [1.5, 10, 39, 31, 15, 1.5],
                   theta: ['A','B','C', 'D', 'E', 'A'],
                   fill: 'toself',
                   mode: `${mode}`,
                   name: `${legend2}`,
                 marker:{
                     color:`${color2}`,
                     opacity:`${opac}`,
                     size:`${size}`
                 
               },
               line:{
                     color:`${color2}`,
                     opacity:`${opac}`,
                     width:`${size1}`
                 
               }
                   }
  
          ]}
          layout={ {width: 750, height: 520,polar: {
                   radialaxis: {
                     visible: true,
                     range: range
                   }
                 },
                 showlegend: true, legend: {
    x: `${xlegend}`,
    y:`${ylegend}`
  }, title:`${name}`} }
        />
        
        </div>
      );
  }
}

export default Radar;