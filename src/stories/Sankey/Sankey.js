/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, number,select,color} from "@storybook/addon-knobs";








class Sankey extends Component {
  render() {
    const name = text("Title", "Sankey Diagram");
    const options = ["v", "h"]
    const value = select("Orientation", options, "h");
    const label = 'Color';
    const color1 = color(label, 'blue'); 
    const color2 = color("Line color", 'black'); 
    const width = number("Line width", 0.5); 
    const value1 = 'Thickness';
    const options1 = {
      range: true,
      min: 0,
      max: 100,
      step: 10,
   };
    const thick = number(value1, 30, options1);
    const pad = number("Node padding", 30);
    const options2 = ["all", "none","skip"]
    const info = select("Hoverinfo", options2, "all");
    
    
    
    
         
      
    return (
        <div className="body">
        <Plot className="plot"
          data={[
            {
              type: "sankey",
              orientation: `${value}`,
              hoverinfo:`${info}`,
              node: {
                pad: `${pad}`,
                thickness:`${thick}`,
                line: {
                  color: `${color2}`,
                  width: `${width}`
                },
               label: ["A1", "A2", "B1", "B2", "C1", "C2"],
               color: `${color1}`
                  },

              link: {
                source: [0,1,0,2,3,3],
                target: [2,3,3,4,4,5],
                value:  [8,4,2,8,4,2]
              }
            }
  
          ]}
          layout={ {width: 750, height: 520, title:`${name}`, showlegend:true, font:{ size:10}} }
        />
        
        </div>
      );
  }
}

export default Sankey;