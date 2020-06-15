/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';



/* JSON Editor styling */


import {text, color,number,select} from "@storybook/addon-knobs";

var x = [];
for (var i = 0; i < 100; i ++) {
	x[i] = Math.random();
}





class Hist extends Component {
  render() {
    const name = text("Title", "Histogram");
    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;
    const label = 'Color';
    const defaultValue = '#721b65';
    const color1 = color(label, defaultValue);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
   const label2= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label2, -45 , options2);
    const opac = number(label1, 0.6, options);
    const options10 = ['v', 'h']
  const defaultValue4 = 'v';    
  const value3 = select("Orientation", options10, defaultValue4);
    const width = number("Bar Width", -1.9);
    const legend=text("Legend text","2020 sales")
    const options8 = [0,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);
 
   
   
    const gap = number("Bargap", 0);
    
    
 
    
    return (
     
      <div className="body">
      <Plot className="plot"
        data={[
            {
             type: 'histogram',
             x: x,
             name: `${legend}` ,
             hovertemplate: ' Value of x: %{x}<br>',
             width: `${width}` ,
             orientation:`${value3}` ,
             marker:{
                 color:`${color1}`,
                 opacity: `${opac}`
             },
            
             
          }
            
        ]}
        layout={ {width: 750, height: 600,  showlegend: true,
       
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
}, title: `${name}`, 
bargap :`${gap}`} }
   />
      </div>
    );
  }
}

export default Hist;