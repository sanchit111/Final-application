/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,boolean,select} from "@storybook/addon-knobs";

class Frequency extends Component {
  render() {
    const title=text("Title","Frequency Polygon") ; 
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Color1';
    const defaultValue = '#fcbf1e';
    const color1= color(label, defaultValue);
    const label2 = 'Color2';
    const defaultValue2 = '#c70039';
    const color2 = color(label2, defaultValue2);
    const legend1 = text("Legend of plot-1", "Trace 0");
    const legend2 = text("Legend of plot-2", "Trace 1");  
    //const label3 = 'Color3';
    //const defaultValue3 = '#005082';
    //const color3 = color(label3, defaultValue3);

    const option = {
      range: true,
      min: -180,
      max: 180,
      step: 20,
   };
   const angle= number('x-axis tick angle', -45 , option);

    const label1 = 'Marker Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value1 = number(label1, 0.6, options);

    const option1 = ["lines","lines+markers","markers","none"]  
    const mode = select("Mode", option1, "lines+markers");
    

    const label8 = 'X-Legend coordinates';
    const options8 = [0,0.5,1]  
    const xlegend = select(label8, options8, 1);
    const label5 = 'Y-Legend coordinates';
    const options5 = [0,0.5,1]  
    const ylegend = select(label5, options5, 1);

    const value2 = number("Marker Size", 7);
    const value7 = number("Line Width", 3);

    const options6 = ["circle","square","diamond","triangle-up", "pentagon","hexagon", "octagon","cross","x","star","hourglass"];
    const value6 = select("Marker Symbol", options6, "circle");
    const options7 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const dash= select("Dash style", options7, "solid");

    const label4 = 'Fill';
    const options4 = ['tozeroy', 'tonexty', 'toself']
    const defaultValue4 = 'tonexty';    
    const value4 = select(label4, options4, defaultValue4);
   
    
    return (
      <div className="body"> 
     
      <Plot className="plot"
        data={[
          {
            x: [1, 2, 2.5, 3, 4, 5, 6, 7],
            y: [1, 2, 5, 4, 4.5, 1, 2, 2.5],
            fill: `${value4}`,
            mode: `${mode}`,
            name: `${legend1}` ,
            marker: {
             opacity:`${value1}`,
             color: `${color1}`,
             symbol: `${value6}`,
             size:`${value2}`
              },
              line: {
                
                width:`${value7}`,
                dash:`${dash}`
              }
          },

           {
           x: [1, 2, 3, 4, 4.5, 5, 6, 7],
           y: [1.5, 2.5, 2, 5, 3.5, 4, 0.5],
            fill:`${value4}`,
            mode: `${mode}`,
            name: `${legend2}` ,
            marker: {
             opacity:`${value1}`,
             color: `${color2}`,
             symbol: `${value6}`,
             size:`${value2}`
              },
            line: {
                
                width:`${value7}`,
                dash:`${dash}`
              }
          }
        ]}
        layout={ {width: 750, height: 520, title:`${title}`,
         xaxis: {
    title: `${xlabel}`,
    
    tickangle: `${angle}`
  },
  yaxis: {
    title: `${ylabel}`,
    
  },legend: {
    x: `${xlegend}`,
    y:`${ylegend}`
  },title:`${title}`
        } }
      />
      
      </div>
    );
  }
}
export default Frequency;