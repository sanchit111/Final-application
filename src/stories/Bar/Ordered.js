/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";



class Order extends Component {
  render() {
    const name = text("Title", "Ordered Bar Plot");
    const xlabel=text("x-axis label","Month") ;
    const ylabel=text("y-axis label","Percent") ;
    const label = 'Color';
    const defaultValue = '1eb2a6';
    const value = color(label, defaultValue);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 1, options);
   const label2= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label2, -45 , options2);
    const value3 = text("Orientation", "v");
    const gap = number("Bargap", 0.2);
    const width = number("Bar Width", 0.7);
    const legend=text("Legend text","August")
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend', options9, 1);
    
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
              y: [80, 54, 50, 35, 24, 10, 3],
              type: 'bar',
              name: `${legend}` ,
             width: `${width}` ,
             type: 'bar',
             hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',             
              marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}` }
            
        ]}
        layout={ {width: 750, height: 520,showlegend: true,
        
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
  ,bargap:`${gap}`} }
      />
      
      </div>
    );
  }
}

export default Order;