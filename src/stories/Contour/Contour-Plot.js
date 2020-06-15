/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';



/* JSON Editor styling */


import {text, color,number,select,boolean} from "@storybook/addon-knobs";



class Bar extends Component {
  render() {
    const name = text("Title", "Contour Plot");
    const xlabel=text("x-axis label","x-axis") ;
    const ylabel=text("y-axis label","y-axis") ;
    const label = 'Color';
    const defaultValue = '#721b65';
    const value = color(label, defaultValue);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label1, 1, options);
    const legend=text("Legend text","plot");
   const label2= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label2, -45 , options2);

    //const value3 = text("Orientation", "v");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);

    
    return (
     
      <div className="body">
      <Plot className="plot"
        data={[
            {
             z: [[10, 10.625, 12.5, 15.625, 20],
                [5.625, 6.25, 8.125, 11.25, 15.625],
                [2.5, 3.125, 5., 8.125, 12.5],
                [0.625, 1.25, 3.125, 6.25, 10.625],
                [0, 0.625, 2.5, 5.625, 10]],
             x: [-9, -6, -5 , -3, -1],
             y: [0, 1, 4, 5, 7],
             name: `${legend}` ,
             type: 'contour',
             hoverinfo: "x,y,z",
             opacity:`${value2}` ,
             
             color: `${value}`
              
            }
            
        ]}
        layout={ {width: 750, height: 520, showlegend: true, title: `${name}`,
         xaxis: {
    title: `${xlabel}`,
    
    tickangle: `${angle}`
  },
  yaxis: {
    title: `${ylabel}`,
    
  },
  legend: {
    x: `${xlegend}`,
    y:`${ylegend}`,
    title: `${name}`
  }
        
        } }
      />
      
      </div>
    );
  }
}

export default Bar;
