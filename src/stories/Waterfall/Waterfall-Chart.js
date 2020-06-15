/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';



/* JSON Editor styling */


import {text, color,number,select} from "@storybook/addon-knobs";




class Waterfall extends Component {
  render() {
    const name = text("Title", "Waterfall Chart");
    const xlabel=text("x-axis label","x-axis") ;
    const ylabel=text("y-axis label","y-axis") ;
    const label = 'Color 1';
    const defaultValue = '#800000';
    const value = color(label, defaultValue);
    const label10 = 'Color 2';
    const defaultValue1 = '#008080';
    const value1 = color(label10, defaultValue1);
    const label11 = 'Color 3';
    const defaultValue2 = '#00bfff';
    const value4 = color(label11, defaultValue2);
    const label1 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
   const value2 = number(label1, 0.9, options);
   const label2= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label2, -45 , options2);

  const options6 = ['inside', 'outside','auto', 'none']
  const defaultValue6 = 'outside';    
  const value6 = select("Text position", options6, defaultValue6);
   
    const gap = number("Bargap", 0.2);
    const width = number("Bar Width", -1.0);
    const legend=text("Legend text","Label");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);
 
    
    return (
     
      <div className="body">
      <Plot className="plot"
        data={[
            {
              name: `${legend}`,
              width: `${width}` ,
              opacity:`${value2}`,
            type: "waterfall",
            measure: [
                "relative",
                "relative",
                "total",
                "relative",
                "relative",
                "total"
            ],
            x: [
                "Sales",
                "Consulting",
                "Net revenue",
                "Purchases",
                "Other expenses",
                "Profit before tax"
            ],
            textposition: `${value6}` ,
            text: [
                "+60",
                "+80",
                "",
                "-40",
                "-20",
                "Total"
            ],          
            y: [
                60,
                80,
                0,
                -40,
                -20,
                0
            ],
           decreasing:
           {
               marker:
                   {
                    color: `${value}`
                    }},

            increasing:
           {
               marker:
                   {
                    color: `${value1}`
                    }},      

             totals:
           {
               marker:
                   {
                    color: `${value4}`
                    }},          
            connector: {
              line: {
                color: "rgb(63, 63, 63)"
              }
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

export default Waterfall;