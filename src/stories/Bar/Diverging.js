/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';



/* JSON Editor styling */



import {text, color,number,select} from "@storybook/addon-knobs";



class Diverge extends Component {
  render() {
    const name = text("Title", "Diverging Bar Plot");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Color1';
    const defaultValue = '#ffd31d';
    const value1 = color(label, defaultValue);
    const value2 = color('Color2', 'd9455f');
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value3 = number(label1, 0.9, options);
   const label2= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label2, -45 , options2);
    const value4 = text("Orientation", "h");
    const legend1 = text("Legend of plot-1", "2016 sales");
    const legend2 = text("Legend of plot-2", "2017 sales");
    const gap = number("Bargap", 0.2);
    const width = number("Bar Width", 2);
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend', options9, 1);
    return (
      <div className="body">
       <Plot className="plot"
        data={[
          {
             type: 'bar',
             x: [20, 14, 23],
             y: [5,10,15],
             width: `${width}` ,
             name:`${legend1}`,
             type: 'bar',
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             
             marker: {
             opacity:`${value3}` ,
             color: `${value1}`
              },
            
             orientation: `${value4}`
             
          },
          {
             type: 'bar',
             x: [-5, -14, -13],
             y: [5,10,15],
             width: `${width}` ,
             name:`${legend2}`,
             type: 'bar',
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
             
             marker: {
             opacity:`${value3}` ,
             color: `${value2}`
              },
            
             orientation: `${value4}`
          }
        ]}
        layout={ {width: 750, height: 520, showlegend: true,
               
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
  bargap:`${gap}`} }
      />
      
      </div>
    );
  }
}

export default Diverge;