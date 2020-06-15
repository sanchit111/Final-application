/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number} from "@storybook/addon-knobs";

class Tree extends Component {
  render() {
    const name = text("Title", "Venn Diagram");
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
    const gap = number("Bargap", 0);
    return (
      <div className="body">
      <h1>
      Stacked Column
      </h1>
      <Plot className="plot"
        data={[
            {
  x: [1, 1.75, 2.5],
  y: [1, 1, 1],
  type: 'scatter',
  mode: 'text',
  text: ['A', 'A+B', 'B'],
  textfont: {
    color: 'black',
    size: 18,
    family: 'Arial'
  }
            }

        ]}
        layout={ {width: 750, height: 520, 
  xaxis: {
    showticklabels: false,
    autotick: false,
    showgrid: false,
    zeroline: false
  },
  yaxis: {
    showticklabels: false,
    autotick: false,
    showgrid: false,
    zeroline: false
  },
  shapes: [{
    opacity: 0.3,
    xref: 'x',
    yref: 'y',
    fillcolor: 'blue',
    x0: 0,
    y0: 0,
    x1: 2,
    y1: 2,
    type: 'circle',
    line: {
      color: 'blue'
    }
  }, {
    opacity: 0.3,
    xref: 'x',
    yref: 'y',
    fillcolor: 'gray',
    x0: 1.5,
    y0: 0,
    x1: 3.5,
    y1: 2,
    type: 'circle',
    line: {
      color: 'gray'
    }
  }],
  margin: {
    l: 20,
    r: 20,
    b: 100
  },
  title:`${name}`
}}  
      />
      
      </div>
    );
  }
}

export default Tree;