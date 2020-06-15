/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";


class Scatter extends Component {
  render() {
    const name = text("Title", "Scatter Plot");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Color1';
    const defaultValue ='#0a97b0';
    const color1 = color(label, defaultValue);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 1, options);
    const value = number("Marker Size", 12);
    const options6 = ["circle","square","diamond","triangle-up", "pentagon","hexagon", "octagon","cross","x","star","hourglass"];
    const value6 = select("Marker Symbol", options6, "circle");
    const legend1=text("Legend text","2018 sales");
    const option = {
      range: true,
      min: -180,
      max: 180,
      step: 20,
   };
   const angle= number('x-axis tick angle', -45 , option);
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend', options9, 1);
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
          {
            x: [1,2,3,4,5,6,7,8,9],
            y: [1,7,3,6,2,5,4,2,6],
            mode: 'markers',
            type: 'scatter',
            name: `${legend1}`,
            hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
            marker: {
              symbol: `${value6}`,
                 opacity:`${value2}` ,
                 color: `${color1}`,
                 size: `${value}`
                  }
          }
        ]}
        layout={ {width: 750, height: 520,title:`${name}`,showlegend: true,
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
export default Scatter;