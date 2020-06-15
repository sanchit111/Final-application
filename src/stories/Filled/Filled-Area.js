/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,boolean,select} from "@storybook/addon-knobs";

class Filled extends Component {
  render() {
    const title=text("Title","Area Chart") ; 
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Color1';
    const defaultValue = '#fcbf1e';
    const color1= color(label, defaultValue);
    const label2 = 'Color2';
    const defaultValue2 = '#c70039';
    const color2 = color(label2, defaultValue2);
    const label1 = 'Marker Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value1 = number(label1, 0.6, options);
    const value2 = number("Marker Size", 7);
    const value7 = number("Line Width", 2);

 const option10 = {
      range: true,
      min: -180,
      max: 180,
      step: 20,
   };
   const angle= number('x-axis tick angle', -45 , option10);

  const label6 = 'X-Legend coordinates';
    const options6 = [0,0.5,1]  
    const xlegend = select(label6, options6, 1);
    const label5 = 'Y-Legend coordinates';
    const options5 = [0,0.5,1]  
    const ylegend = select(label5, options5, 1);
    const legend1 = text("Legend of plot-1", "Trace 0");
    const legend2 = text("Legend of plot-2", "Trace 1");

    const options8 = ["circle","square","diamond","triangle-up", "pentagon","hexagon", "octagon","cross","x","star","hourglass"];
    const value6 = select("Marker Symbol", options8, "circle");
    const option1 = ["lines","lines+markers","markers","none"]  
    const mode = select("Mode", option1, "lines+markers");
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
            x: [1, 2, 3, 4],
            y: [0, 2, 3, 5],
            mode: `${mode}`,
            name: `${legend1}` ,
            fill: `${value4}`,
            type: 'scatter',
            marker: {
             color: `${color1}`,
             opacity:`${value1}`,
             symbol: `${value6}`,
             size:`${value2}`
              },
           line: {
                width:`${value7}`,
                dash:`${dash}`,

              }
          },

           {
            x: [1, 2, 3, 4],
            y: [3, 5, 1, 7],
            mode: `${mode}`,
            name: `${legend2}` ,
            fill:`${value4}`,
            type: 'scatter',
            marker: {
             color: `${color2}`,
             opacity:`${value1}`,
             symbol: `${value6}`,
             size:`${value2}`
              },
             line: {
                width:`${value7}`,
                dash:`${dash}`,

              }
          }

        ]}
        layout={ {width: 750, height: 520, showlegend:true,
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
export default Filled;