/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,boolean,select} from "@storybook/addon-knobs";

class Diverge extends Component {
  render() {
    const name = text("Title", "Diverging Grouped Bar");
    const xlabel=text("x-axis label","x-axis") ;
    const ylabel=text("y-axis label","y-axis") ;
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
    const label2= 'x-axis tick angle';
    const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label2, -45 , options2);


    const value3 = text("Orientation", "h");
    const gap = number("Bargap", 0.2);
    const width = number("Bar Width", -1);
    const legend1=text("Legend text of plot-1","Label 1");
    const legend2=text("Legend text of plot-2","Label 2");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);

    return (
      <div className="body">
       <Plot className="plot"
        data={[
          {
             type: 'bar',
              width: `${width}` ,
              name: `${legend1}` ,
              x: [500,600,700],
              y: ['2016','2017','2018'],
              base: [-500,-600,-700],
              hovertemplate: '%{base}',
             marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}`
             
          },
          {
             type: 'bar',
             width: `${width}` ,
             name: `${legend2}` ,
            x: [300,800,500],
            y: ['2016','2017','2018'],
            base: [-300,-800,-500],
            hovertemplate: '%{base}',
             marker: {
             opacity:`${value2}` ,
             color: `${value4}`
              },
            
             orientation: `${value3}`
          },
           {
             type: 'bar',
             width: `${width}` ,
             name: `${legend1}` ,
              x: [300,400,700],
              y: ['2016','2017','2018'],
              base: 0,
             marker: {
             opacity:`${value2}` ,
             color: `${value}`
              },
            
             orientation: `${value3}`
          }, 
          {
            type: 'bar',
             width: `${width}` ,
             name: `${legend2}` ,
             x: [100,300,900],
             y: ['2016','2017','2018'],
             base: 0,
             marker: {
             opacity:`${value2}` ,
             color: `${value4}`
              },
            
             orientation: `${value3}`
          }
        ]}
        layout={ {width: 750, height: 520, bargap:`${gap}`,

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

export default Diverge;