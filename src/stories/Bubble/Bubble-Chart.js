/* global Plotly:true */

import React, { Component } from 'react';

import Plot from 'react-plotly.js';

import {text,color,number,select,array} from "@storybook/addon-knobs";




class Bubble extends Component {
  render() {
    const label = 'Styles';
  //const defaultValue = ['red', 'green', 'yellow', 'blue'];
 
//const value = array(label, defaultValue);
const name = text("Title", "Bubble Chart");
const xlabel=text("x-axis label","x-axis") ;
const ylabel=text("y-axis label","y-axis") ;
const label10 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const value2 = number(label10, 0.9, options);

const value8 = number("Marker Size 1",  40);
const value9 = number("Marker Size 2", 100);
const value10 = number("Marker Size 3", 70);
const value11 = number("Marker Size 4", 20);

const label7 = 'Color1';
const defaultValue = '#fcbf1e';
const color1= color(label7, defaultValue);
const label2 = 'Color2';
const defaultValue2 = '#c70039';
const color2 = color(label2, defaultValue2);
const label3 = 'Color3';
const defaultValue3 = '#005082';
const color3 = color(label3, defaultValue3);
const label4 = 'Color4';
const defaultValue4 = '#FF0000';
const color4 = color(label4, defaultValue4);

const legend=text("Legend text","Label");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend coordinates', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend coordinates', options9, 1);

   const label9= 'x-axis tick angle';
   const options2 = {
     range: true,
     min: -180,
     max: 180,
     step: 20,
  };
  const angle= number(label9, -45 , options2);
      
      
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[
            {
             x: [1,2,3,4],
             y: [1,3,7,6],
             text: ['A<br>size: 40', 'B<br>size: 100', 'C<br>size: 70', 'D<br>size: 20'],
             name: `${legend}` ,
             mode: 'markers',
             marker: {
             color: [`${color1}`, `${color2}`,  `${color3}`, `${color4}`],
             opacity:`${value2}` ,
             size: [`${value8}`,`${value9}`,`${value10}`,`${value11}`]
              }
            }
        ]}
        layout={ {width: 750, height: 520,  showlegend: true, title:`${name}`,
        
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
        } }
      />
      </div>
    ); 
  }
}

export default Bubble;