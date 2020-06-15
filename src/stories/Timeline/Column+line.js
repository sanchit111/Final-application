/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,boolean,select} from "@storybook/addon-knobs";

class Line extends Component {
  render() {
    const title=text("Title","Column+line timeline") ; 
    const xlabel=text("x-axis label","x-axis") ;
    const ylabel=text("y-axis label","y-axis") ;
    const label = 'Color1';
    const defaultValue = '#fcbf1e';
    const color1= color(label, defaultValue);
    const label2 = 'Color2';
    const defaultValue2 = '#c70039';
    const color2 = color(label2, defaultValue2);
    const legend=text("Legend text 1","Trace 0");
    const legend2=text("Legend text 2","Trace 1");
    //const label3 = 'Color3';
    //const defaultValue3 = '#005082';
    //const color3 = color(label3, defaultValue3);
    const width = number("Bar Width", -1.0);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value1 = number(label1, 0.6, options);

   const label5= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label5, -45 , options2);

    //const value2 = number("Marker Size", 7);
   // const gap = number("Bargap", 0.2);
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);

    const label4 = 'Fill';
    const options4 = ['tozeroy', 'tonexty', 'toself']
    const defaultValue4 = 'tonexty';    
    const value4 = select(label4, options4, defaultValue4);
   
    
    return (
      <div className="body"> 
     
      <Plot className="plot"
        data={[
          {
            x: [1, 2, 3],
            y: [2, 6, 3],
            fill: `${value4}`,
             name: `${legend}` ,
            type: 'scatter',
            mode: "lines+points",
            marker: {
             opacity:`${value1}`,
             color: `${color1}`,
             
              }
          },

           {
           x: [1, 2, 3], 
           y: [2, 5, 3],
            fill:`${value4}`,
            name: `${legend2}` ,
            width: `${width}` ,
            type: 'bar',
            marker: {
             opacity:`${value1}`,
             color: `${color2}`,
             
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
    
  },
  legend: {
    x: `${xlegend}`,
    y:`${ylegend}`
  }, title: `${title}`
    } }
        
      />
      
      </div>
    );
  }
}
export default Line;