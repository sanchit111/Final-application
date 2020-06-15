/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';



/* JSON Editor styling */



import {text, color,number} from "@storybook/addon-knobs";



class Diverge extends Component {
  render() {
    const name = text("Title", "Diverging Bar Plot");
    const label = 'Color1';
    const defaultValue = '#ffd31d';
    const value = color(label, defaultValue);
    const value4 = color('Color2', 'd9455f');
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 0.9, options);
    const value3 = text("Orientation", "h");
    const gap = number("Bargap", 0.2);
    return (
      <div className="body">
       <Plot className="plot"
        data={[
          {
             type: 'bar',
             x: [20, 14, 23],
             y: [5,10,15],
             marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}`
             
          },
          {
             type: 'bar',
             x: [-5, -14, -13],
             y: [5,10,15],
             marker: {
             opacity:`${value2}` ,
             color: `${value4}`
              },
            
             orientation: `${value3}`
          }
        ]}
        layout={ {width: 750, height: 520, title: `${name}`, bargap:`${gap}`} }
      />
      
      </div>
    );
  }
}

export default Diverge;