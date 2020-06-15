/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";


class Pair extends Component {
  render() {
    const name = text("Title", "Basic Column");
    const xlabel=text("x-axis label","x-axis") ;
    const ylabel=text("y-axis label","y-axis") ;
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
    const width = number("Bar Width", -0.9);
    const legend=text("Legend text","Label");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);
    
    return (
      <div className="body">
      <h1>
      Paired Column
      </h1>
      <Plot className="plot"
        data={[
            {
             x: ["giraffes", "orangutans", "monkeys"],
              y: [20, 14, 23],
              width: `${width}` ,
              type: 'bar',
              marker: {
             opacity:`${value2}` ,
             color: `${color1}`
              },
            
             orientation: `${value3}` 
            },
            {
               x: ["giraffes", "orangutans", "monkeys"],
              y: [12, 18, 29],
              width: `${width}` ,
              type: 'bar',
              marker: {
             opacity:`${value2}` ,
             color: `${color2}`
              },
            
             orientation: `${value3}` 
            }
        ]}
        layout={ {width: 750, height: 520,bargap:`${gap}`,title:` ${name}`,
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

export default Pair;