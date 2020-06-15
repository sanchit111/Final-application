/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';



/* JSON Editor styling */


import {text, color,number,boolean} from "@storybook/addon-knobs";



class Bar extends Component {
  render() {
    const name = text("Title", "Column Chart");
    const label = 'Color';
    const defaultValue = '#721b65';
    const value = color(label, defaultValue);
    const show = boolean("Legend", true);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 0.6, options);
    const value3 = text("Orientation", "v");
    const gap = number("Bargap", 0.2);
 
    
    return (
     
      <div className="body">
      <Plot className="plot"
        data={[
            {
              x: [1,2,3,4],
              y: [1,3,7,6],
            // name: '2020 sales',
             type: 'bar',
             hoverinfo: "x,y",
             marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}` }
            
        ]}
        layout={ {width: 750, height: 520, showlegend:`${show}`, title: `${name}`,  bargap :`${gap}`} }
      />
      
      </div>
    );
  }
}

export default Bar;
