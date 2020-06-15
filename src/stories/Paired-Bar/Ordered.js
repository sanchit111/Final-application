/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, color,number} from "@storybook/addon-knobs";



class Order extends Component {
  render() {
    const name = text("Title", "Ordered Bar Plot");
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
    const value3 = text("Orientation", "v");
    const gap = number("Bargap", 0.2);
    
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
              x: [2014, 2015, 2016, 2017, 2018, 2019, 2020],
              y: [80, 54, 50, 35, 24, 10, 3],
              type: 'bar',
              marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}` }
            
        ]}
        layout={ {width: 750, height: 520,bargap:`${gap}`, title:`${name}`} }
      />
      
      </div>
    );
  }
}

export default Order;