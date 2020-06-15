/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";


class Lollipop extends Component {
  render() {
    const name = text("Title", "Lollipop Chart");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Line Color';
    const defaultValue ='rgb(128, 0, 128)';
    const color1 = color(label, defaultValue);
    const label2 = 'Bar Color';
    const defaultValue2 ='rgb(128, 0, 128)';
    const color2 = color(label2, defaultValue2);
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
    const opac = number(label1, 1,options);

    const label7 = 'Line Opacity';
    const options8 = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac1 = number(label7, 1,options8);

    const option1 = ["lines","lines+markers","none"]  
    const mode = select("Mode", option1, "lines");
    const option10 = ["lines","lines+markers","markers"]  
    const mode1 = select("Marker mode", option10, "markers");
    const legend1 = text("Legend of plot-1", "Label 1");
    const legend2 = text("Legend of plot-2", "Label 2");
    const legend3 = text("Legend of plot-3", "Label 3");
    const legend4 = text("Legend of plot-4", "Label 4");
    const legend5 = text("Legend of plot-5", "Label 5");
    const legend6 = text("Legend of plot-6", "Max");
   
    const label4 = 'X-Legend coordinates';
    const options4 = [0,0.5,1]  
    const xlegend = select(label4, options4, 1);
    const label5 = 'Y-Legend coordinates';
    const options5 = [0,0.5,1]  
    const ylegend = select(label5, options5, 1);
    
    const value = number("Marker Size", 12);
    const value2 = number("Line Width", 5);
    //const options3 = ["linear","spline","hv","vh","hvh","vhv"]  ;
    //const shape = select("Line Shape", options3, "linear");
    const options6 = ["circle","square","diamond","triangle-up", "pentagon","hexagon", "octagon","cross","x","star","hourglass"];
    const value6 = select("Marker Symbol", options6, "circle");
    const options7 = ["solid", "dot", "dash", "longdash", "dashdot",  "longdashdot"]  
    const dash= select("Dash style", options7, "solid");
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              x: [1, 2],
              y: [1, 1],
              mode: `${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              opacity: `${opac1}`,
              name: `${legend1}` ,
              line: {
                color: `${color1}`,
                width:`${value2}`,
                //shape:`${shape}`,
                dash:`${dash}`,

              }
            },
            {
             x: [1, 2, 3],
             y: [2, 2, 2],
              mode: `${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              opacity: `${opac1}`,
              name: `${legend2}` ,
              line: {
                color: `${color1}`,
                width:`${value2}`,
                //shape:`${shape}`,
                dash:`${dash}`
              }
            },
            {
              x: [1, 2, 3, 4],
              y: [3, 3, 3, 3],
              mode: `${mode}`,
              opacity: `${opac1}`,
              name: `${legend3}` ,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
                line: {
                  color: `${color1}`,
                width:`${value2}`,
                //shape:`${shape}`,
                dash:`${dash}`
              }
            },
            {
              x: [1, 2, 3, 4, 5],
              y: [4, 4, 4, 4, 4],
              mode: `${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              opacity: `${opac1}`,
              name: `${legend4}` ,
              line: {
                color: `${color1}`,
                width:`${value2}`,
                //shape:`${shape}`,
                dash:`${dash}`
              }
            },
            {
              x: [1, 2, 3, 4, 5, 6],
              y: [5, 5, 5, 5, 5, 5],
              mode: `${mode}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              opacity: `${opac1}`,
              name: `${legend5}` ,
              line: {
                color: `${color1}`,
                width:`${value2}`,
                //shape:`${shape}`,
                dash:`${dash}`
              }
            },
            
            {
               x: [2, 3, 4, 5, 6],
               y: [1, 2, 3, 4, 5],
              mode: `${mode1}`,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
              name: `${legend6}` ,
              marker: {
              color:  `${color2}`,
              symbol: `${value6}`,
              size:  `${value}`,
              opacity: `${opac}`
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
    
  },
  legend: {
    x: `${xlegend}`,
    y:`${ylegend}`
  }, title: `${name}`

        } }
      />
      
      </div>
    );
  }
}
export default Lollipop;