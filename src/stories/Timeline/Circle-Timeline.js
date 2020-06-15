/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, number,select,array,color} from "@storybook/addon-knobs";








class Timeline extends Component {
  render() {
    const name = text("Title", "Circle Timeline");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Marker Color';
    const defaultValue ='#0a97b0';
    const color1 = color(label, defaultValue);
    const label2 = 'Line Color';
    const defaultValue2 ='blue';
    const color2 = color(label2, defaultValue2);

    const label1 = 'Bubble Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac= number(label1, 1, options);
   
    const width= number("Line Width", 4);
    const options6 = ["circle","square","diamond","triangle-up", "pentagon","hexagon", "octagon","cross","x","star","hourglass"];
    const symbol = select("Bubble Symbol", options6, "circle");
    const legend1=text("Legend for plot-1","Group-A");
    const legend2=text("Legend for plot-2","Group-B");
    const legend3=text("Legend for plot-3","Group-C");
    const legend4=text("Legend for plot-4","Group-D");
    const options7 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const dash = select("Dash style", options7, "solid");
    const option = {
      range: true,
      min: -180,
      max: 180,
      step: 20,
   };
   const angle= number('x-axis tick angle', -45 , option);
    const options8 = [0,1]  
    const xlegend = select('X-Legend', options8, 1);
    const ylegend = select('Y-Legend', options8, 1);
         
      
    return (
        <div className="body">
        <Plot className="plot"
          data={[
            {
              x: [1.5, 2, 3,3.7, 4.2,4.7,5.3],
              y: [0.5, 0.5, 0.5, 0.5,0.5,0.5,0.5],
              mode: 'markers',
              name: `${legend1}`,
              marker: {
              size: [60, 40, 80, 30, 40,30, 50],
              color: `${color1}`,
              opacity: `${opac}`,
              symbol:`${symbol}` 
              }},
              {
              x: [0.5, 1, 2,2.8, 3.4,4],
              y: [1, 1, 1, 1 , 1,1],
              mode: 'markers',
              name: `${legend2}`,
              marker: {
                size: [30, 30, 70, 50, 60,40],
              color: `${color1}`,
              opacity: `${opac}`,
              symbol:`${symbol}` 
              }},
              {
              x: [1, 1.6, 3,3.4, 3.9,4.6,5.4],
              y: [1.5, 1.5, 1.5, 1.5 , 1.5,1.5,1.5],
              mode: 'markers',
              name: `${legend3}`,
              marker: {
                size: [30, 60, 30, 40, 50,60,80],
              color: `${color1}`,
              opacity: `${opac}`,
              symbol:`${symbol}` 
              }},
              {
              x: [1, 1.6, 2.2,3.4, 3.9,4.6],
              y: [2, 2, 2, 2 , 2,2],
              mode: 'markers',
              name: `${legend4}`,
              marker: {
                size: [60, 40, 60, 40, 20,50],
              color: `${color1}`,
              opacity: `${opac}`,
              symbol:`${symbol}` 
              }}
  
          ]}
          layout={ { xaxis: {
                range: [0, 6]
              },
              yaxis: {
                range: [0, 2.5]
              },
              width: 720,
              height: 550,
              shapes: [

    

    //Line Horizontal

            {
              type: 'line',
              x0: 0,
              y0: 2,
              x1: 6,
              y1: 2,
              line: {
                color: `${color2}`,
                width: `${width}`,
              dash:`${dash}`
                
              }
            },
            {
              type: 'line',
              x0: 0,
              y0: 1.5,
              x1: 6,
              y1: 1.5,
              line: {
                color: `${color2}`,
                width: `${width}`,
              dash:`${dash}`
                
              }
            },
            {
              type: 'line',
              x0: 0,
              y0: 1,
              x1: 6,
              y1: 1,
              line: {
                color:`${color2}`,
                width: `${width}`,
                dash:`${dash}`
              }
            },
            {
              type: 'line',
              x0: 0,
              y0: 0.5,
              x1: 6,
              y1: 0.5,
              line: {
                color: `${color2}`,
                width: `${width}`,
                dash:`${dash}`
              }
            }],
            width: 750, height: 520,
                 showlegend: true, xaxis: {
    title: `${xlabel}`,
    
    tickangle: `${angle}`
  },
  yaxis: {
    title: `${ylabel}`,
    
  },
  legend: {
    x: `${xlegend}`,
    y:`${ylegend}`
  },title:`${name}`} }
        />
        
        </div>
      );
  }
}

export default Timeline;