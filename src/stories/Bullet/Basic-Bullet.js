/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";


class Bullet extends Component {
  render() {
    const name = text("Title", "Basic Bullet");
    
    const value1 = number("Value1", 180);
    const value2 = number("Value2", 35);
    const value3 = number("Value3", 220);

    
    const label = 'Threshold Line Color';
    const defaultValue ='#0a97b0';
    const color1 = color(label, defaultValue);
    const LineWidth = number("Threshold Line Width", 2);
   

    const label4 = 'Bar Color';
    const defaultValue2 ='orange';
    const color2 = color(label4, defaultValue2);

    const refer = number("Delta Reference Value", 200);


    
    
    const name1 = text("Title for bullet-1", "Revenue");
    const name2 = text("Title for bullet-2", "Profit");
    const name3 = text("Title for bullet-3", "Satisfaction");

    
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
    type: "indicator",
    mode: "number+gauge+delta",
    value: `${value1}`,
    delta: { reference: `${refer}`},
    domain: { x: [0.25, 1], y: [0.08, 0.25] },
    title: { text:`${name1}`},
    gauge: {
      shape: "bullet",
      axis: { range: [null, 300] },
      threshold: {
        line: { color: `${color1}`, width: `${LineWidth}` },
        thickness: 0.75,
        value: 170
      },
      steps: [
        { range: [0, 150], color: "gray" },
        {
          range: [150, 250],
          color: "lightgray"
        }
      ],
      bar: { color: `${color2}` }
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: `${value2}`,
    delta: { reference: `${refer}`},
    domain: { x: [0.25, 1], y: [0.4, 0.6] },
    title: { text: `${name2}`},
    gauge: {
      shape: "bullet",
      axis: { range: [null, 100] },
      threshold: {
        line: { color: `${color1}`, width: `${LineWidth}` },
        thickness: 0.75,
        value: 50
      },
      steps: [
        { range: [0, 25], color: "gray" },
        { range: [25, 75], color: "lightgray" }
      ],
      bar: { color: `${color2}`}
    }
  },
  {
    type: "indicator",
    mode: "number+gauge+delta",
    value: `${value3}`,
    delta: { reference: `${refer}`},
    domain: { x: [0.25, 1], y: [0.7, 0.9] },
    title: { text: `${name3}` },
    gauge: {
      shape: "bullet",
      axis: { range: [null, 300] },
      threshold: {
        line: { color: `${color1}`, width: `${LineWidth}` },
        thickness: 0.75,
        value: 210
      },
      steps: [
        { range: [0, 150], color: "gray" },
        { range: [150, 250], color: "lightgray" }
      ],
      bar: { color: `${color2}`}
    }
  }
        ]}
        layout={ {width: 750, height: 520,title:`${name}`} }
      />
      
      </div>
    );
  }
}
export default Bullet;