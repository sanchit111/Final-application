/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';



/* JSON Editor styling */



import {text, color, number, select} from "@storybook/addon-knobs";



class Violin extends Component {
  render() {
    const name = text("Title", "Violin Chart");
    const xlabel=text("x-axis label","x-axis") ;
    const ylabel=text("y-axis label","y-axis") ;
    const label = 'Color1';
    const defaultValue = '#ffd31d';
    const value = color(label, defaultValue);
    const value4 = color('Color2', 'd9455f');
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 0.9, options);
    const value3 = text("Orientation", "h");
    const gap = number("Bargap", 0.2);
    const width = number("Bar Width", 4.0);
    const legend=text("Legend text","Label");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);
    const legend1=text("Legend for Plot-1","Men") ;
    const legend2=text("Legend for Plot-2","Women") ;
   
    const label2= 'x-axis tick angle';
    const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
      };
  const angle= number(label2, -45 , options2);

    return (
      <div className="body">
       <Plot className="plot"
        data={[
          {
             name: `${legend1}`,
             width: `${width}` , 
             type: 'bar',
              x: [600, 623, 653, 650, 670, 578, 541, 360, 312, 170], 
              y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
             marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}`
             
          },
          {
             name: `${legend2}`, 
             width: `${width}` ,
             type: 'bar',
             x: [-600, -623, -653, -650, -670, -578, -541, -411, -322, -230], 
             y: [0, 10, 20, 30, 40, 50, 60, 70, 80, 90], 
             hoverinfo: "[x,y]",
             marker: {
             opacity:`${value2}` ,
             color: `${value4}`
              },
            
             orientation: `${value3}`
          }
        ]}
        layout={ {width: 750, height: 520, title: `${name}`, bargap:`${gap}`, 
        
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
        bargap :`${gap}`
         }}
      />
      
      </div>
    );
  }
}

export default Violin;