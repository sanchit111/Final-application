/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,boolean,select} from "@storybook/addon-knobs";

class Area extends Component {
  render() {
    const title=text("Title","Area Chart") ; 
    const xlabel=text("x-axis label","x-axis") ;
    const ylabel=text("y-axis label","y-axis") ;
    const label = 'Color1';
    const defaultValue = '#fcbf1e';
    const color1= color(label, defaultValue);
    const label2 = 'Color2';
    const defaultValue2 = '#c70039';
    const color2 = color(label2, defaultValue2);
    const label3 = 'Color3';
    //const defaultValue3 = '#005082';
    //const color3 = color(label3, defaultValue3);
    const label1 = 'Marker Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
   const label5= 'x-axis tick angle';
   const options8 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label5, -45 , options8);
    const value1 = number(label1, 0.6, options);
    const value2 = number("Marker Size", 7);
    const value3 = number("Line Width", 2);
    const label4 = 'Fill';
    const options1 = ['tozeroy', 'tonexty', 'toself']
    const defaultValue4 = 'tonexty';    
    const value4 = select(label4, options1, defaultValue4);
    const options2 = ["lines","scatter","none"]  
    const value5 = select("Mode", options2, "scatter");
    const options3 = ["linear","spline","hv","vh","hvh","vhv"]  ;
    const value6 = select("Line Shape", options3, "linear");
    const options4 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const value7 = select("Dash style", options4, "solid");
    const options5 = [0,1]  
    const xlegend = select('X-Legend coordinates', options5, 1);
    const options6 = [0,1]  
    const ylegend = select('Y-Legend coordinates', options6, 1);
    const legend1=text("Legend for Plot-1","label 1") ;
    const legend2=text("Legend for Plot-2","label 2") ;
    //const legend3=text("Legend for Plot-3","label 3") ;
    
    

   
    
    return (
      <div className="body"> 
     
      <Plot className="plot"
        data={[
          {
           x: [1, 2, 3, 4],
           y: [0, 2, 3, 5],
            fill: `${value4}`,
            type: 'scatter',
            name: `${legend1}` ,
            hovertemplate: 'Value of Sales Year : %{x}<br> Value of Percentage : %{y}<br> ',
            marker: {
             
             opacity:`${value1}`,
             color: `${color1}`,
             size:`${value2}`
              },
              line:{
                color: `${color1}`,
                width:`${value3}`,
                shape:`${value6}`,
                dash:`${value7}`
              },
              mode:`${value5}`,
              
          },

           {
             x: [1, 2, 3, 4],
             y: [3, 5, 6, 9],
            fill:`${value4}`,
            type: 'scatter',
            name: `${legend2}` ,
            hovertemplate: ' Value of Sales Year : %{x}<br> Value of Percentage : %{y}<br>',
            marker: {
             opacity:`${value1}`,
             color: `${color2}`,
             size:`${value2}`
              },
              line:{
                color: `${color2}`,
                width:`${value3}`,
                shape:`${value6}`,
                dash:`${value7}`
              },
              mode:`${value5}`,
              
              
          }
        ]}
        layout={ {width: 750, height: 520, title:`${title}`, showlegend: true,
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
  }} }
      />
      
      </div>
    );
  }
}
export default Area;