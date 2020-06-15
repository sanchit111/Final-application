/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text, number,select,color} from "@storybook/addon-knobs";








class Calendar extends Component {
  render() {
    const name = text("Title", "Calendar Heatmap");
    const xlabel=text("x-axis label","Week") ;
    const ylabel=text("y-axis label","Month") ;
    const value = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac = number(value, 1, options);
     
    
    const gap1 = number("X-Gap", 2);
    const gap2 = number("Y-Gap", 2); 
    const label1 = 'Thickness of Colorbar';
    const options2 = {
      range: true,
      min: 0,
      max: 100,
      step: 10,
   };
    const thick = number(label1, 30, options2);
    const label2= 'x-axis tick angle';
   const option2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const color1 = color("Color for scale 1", '#d92027');
  const color2 = color("Color for scale 0", '#ffcd3c');
  const colorscaleValue = [
    [0, color2],
    [1, color1]
  ];
  const angle= number(label2, -45 , option2);
    const label3 = "Length of Colorbar";
    const options3 = {
        range: true,
        min: 0,
        max: 1.5,
        step: 0.1,
     };
      const length = number(label3, 1, options3);
      const options4 = ["left","center","right"]  
    const anchor1 = select('X-anchor', options4, "left"); 
    
     
   
    

      
    return (
        <div className="body">
        <Plot className="plot"
          data={[
            {
              z: [[77.9, 68.4, 69.7, 70.6, 71.3, 76.9, 69.1 ], [66.7, 67.4, 60, 72.5, 68.8, 66.6, 67.3], [39.5, 40, 35.2, 24.6, 31.4, 34.6, 33.38],[33.7, 34.6, 42.3, 29.4, 35.3, 33 , 37.2 ], [36.4, 33.4, 24.8, 31, 33.2, 45.3, 38]],
              x: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday','Sunday'],
              y: ['Aug', 'Sept', 'Oct', 'Nov','Dec'],
              type: 'heatmap',
              hoverongaps: false,
              hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br> Value of z: %{z}<br>',
              colorscale: colorscaleValue,
              opacity:`${opac}`,
              xgap:`${gap1}`,
              ygap:`${gap2}`,
              colorbar:{
                  thickness: `${thick}` , 
                  len: `${length}`,
                  xanchor: `${anchor1}`
              }
            }
  
          ]}
          layout={ {width: 750, height: 520,showlegend: false,
       
       xaxis: {
 title: `${xlabel}`,
 
 tickangle: `${angle}`
},
yaxis: {
 title: `${ylabel}`,
 
},
 title:`${name}`} }
        />
        
        </div>
      );
  }
}

export default Calendar;