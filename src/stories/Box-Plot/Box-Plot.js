/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, number,select,color} from "@storybook/addon-knobs";








class BoxPlot extends Component {
  render() {
    const name = text("Title", "Box Plot");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    
    const label = 'Color1';
    const defaultValue ='#c70039';
    const color1 = color(label, defaultValue);
 
    const label2 = 'Color2';
    const defaultValue2 ='#feb72b';
    const color2 = color(label2, defaultValue2);
    const title= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(title, -45 , options2);
    const legend1=text("Legend for plot-1","Set-1");
    const legend2=text("Legend for plot-2","Set-2");
    const option = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const width = number("Box width", 0.5, option);
    const options1 = ['v', 'h']  
  const orien = select("Orientation", options1, 'h');
  const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 1, options);
    const width1 = number("Line Width", 2);
    const options7 = ["linear","exclusive","inclusive"]  
    const method = select('Quartilemethod', options7, "linear");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);
   
    
    
   

    
      
      
    return (
        <div className="body">
        <Plot className="plot"
          data={[
            
              {
                
                 x: [1, 2, 3, 4, 4, 4, 8, 9, 10],
                 type: 'box',
                 name: `${legend1}`,
                 width: `${width}`,
                orientaton:`${orien}`, 
                opacity:`${value2}` ,
                quartilemethod:`${method}`,
                hovertemplate: ' Value of x: %{x}',
                marker:
                { color:`${color1}`},
                line:{
                width:`${width1}`
              }
              },
               
            
            
              {
                x: [2, 3, 3, 3, 3, 5, 6, 6, 7],
                type: 'box',
                name: `${legend2}` ,
                width: `${width}`,
                orientation:`${orien}` ,
                opacity:`${value2}`,
                quartilemethod:`${method}`,
                hovertemplate: ' Value of x: %{x}<br>',
                marker:
                { color:`${color2}`},
                line:{
                width:`${width1}`
              } }
             
          ]}
          layout={ {width: 750, height: 520, title:`${name}`,showlegend: true,
       
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
}} }/>
        
        </div>
      );
  }
}

export default BoxPlot;