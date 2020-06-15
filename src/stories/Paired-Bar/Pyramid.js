/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, color,number,boolean} from "@storybook/addon-knobs";


class Population extends Component {
  render() {
    const name = text("Title", "Population Pyramid");
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
    const value3 = text("Orientation", "h");
    const gap = number("Bargap", 0.1);
    return (
        <div className="body">
        <h1>
        Population Pyramid
        </h1>
      <Plot className="plot"
        data={[{
                 
                 name: 'Men', 
                 type: 'bar', 
                 x: [600, 623, 653, 650, 670, 578, 541, 360, 312, 170], 
                 y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                 marker: {
                 opacity:`${value2}` ,
                 color: `${color1}`
                  },
            
                 orientation: `${value3}` 
               },
               {
                name: 'Women', 
                type: 'bar', 
                x: [-600, -623, -653, -650, -670, -578, -541, -411, -322, -230], 
                y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
                marker: {
                 opacity:`${value2}` ,
                 color: `${color2}`
                  },
            
                 orientation: `${value3}` 
            }
            
        ]}
        
        layout={ {width: 750, height: 520, bargap: `${gap}`, barmode: 'relative', title:`${name}`} }
      />
      
      </div>
    );
  }
}

export default Population;