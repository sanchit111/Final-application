/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number} from "@storybook/addon-knobs";

class Stack extends Component {
  render() {
    const name = text("Title", "Stacked Bar Plot");
    const label = 'Color1';
    const defaultValue = '#ffd31d';
    const color1 = color(label, defaultValue);
    const label2 = 'Color2';
    const defaultValue2 = '#d9455f';
    const color2 = color(label2, defaultValue2);
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
      <h1>
      Stacked Column
      </h1>
      <Plot className="plot"
        data={[
            {
              x: [1, 2, 3, 4, 5, 6],
              y: [20, 34, 23, 15, 8, 37],
              name: '2016 Sales ',
              type: 'bar',
              marker: {
                 opacity:`${value2}`,
                 color: `${color1}`
                  },
            
                 orientation: `${value3}`
              },
              {
              x: [1, 2, 3, 4, 5, 6],
              y: [42, 18, 29,30, 51, 11],
              name: '2017 Sales',
              type: 'bar',
              marker: {
                 opacity:`${value2}`,
                 color: `${color2}`
                  },
            
                 orientation: `${value3}`
              }
        ]}
        layout={ {width: 750, height: 520,bargap:`${gap}`, barmode:'relative',  title:`${name}`} }
      />
      
      </div>
    );
  }
}

export default Stack;