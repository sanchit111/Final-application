/* global Plotly:true */

import React, { Component } from 'react';



import Plot from 'react-plotly.js';
import {text, color,number,select} from "@storybook/addon-knobs";

class Dot extends Component {
  render() {
    const name = text("Title", "Dot Strip Plot");
    const value = number("Marker Size", 12);

    const xlabel=text("x-axis label","X-axis") ;
    const ylabel=text("y-axis label","Y-axis") ;

    const label1 = 'Color1';
    const defaultValue1 ='#d92027';
    const color1 = color(label1, defaultValue1);

    const label2 = 'Color2';
    const defaultValue2 ='#ffd31d';
    const color2 = color(label2, defaultValue2);

    const label3 = 'Color3';
    const defaultValue3 ='#035aa6';
    const color3 = color(label3, defaultValue3);

    const label4 = 'Color4';
    const defaultValue4 ='#5b8c5a';
    const color4 = color(label4, defaultValue4);

    const label5 = 'Opacity';
    const options = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac = number(label5, 1, options);
    const option = {
      range: true,
      min: -180,
      max: 180,
      step: 20,
   };
   const angle= number('x-axis tick angle', -45 , option);

    const options6 = ["circle","square","diamond","triangle-up", "pentagon","hexagon", "octagon","cross","x","star","hourglass"];
    const value6 = select("Marker Symbol", options6, "circle");
    const legend1=text("Legend for plot-1","2015 sales");
    const legend2=text("Legend for plot-2","2016 sales");
    const legend3=text("Legend for plot-3","2017 sales");
    const legend4=text("Legend for plot-4","2018 sales");
    const options8 = [0,0.5,1]  
    const xlegend = select('X-Legend', options8, 1);
    const options9 = [0,0.5,1]  
    const ylegend = select('Y-Legend', options9, 1);
    return (
      <div className="body">
      
      <Plot className="plot"
        data={[{
                 x: [1, 2, 3, 4, 5,6, 7, 8 , 9, 10],
                 y: [2, 2, 2, null, null,null, 2, 2, 2, 2],
                 mode: 'markers',
                 type: 'scatter',
                 name: `${legend1}`,
                 hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
                 marker: {
              symbol: `${value6}`,
                 opacity:`${opac}` ,
                 color: `${color1}`,
                 size: `${value}`
                  }
               },
               { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 y: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3],
                 mode: 'markers',
                 name: `${legend2}`,
                 type: 'scatter',
                 hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
                 marker: {
              symbol: `${value6}`,
                 opacity:`${opac}` ,
                 color: `${color2}`,
                 size: `${value}`
                  }
               },
               { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 y: [4, 4, null, 4, 4, 4, 4, null, null, 4],
                 mode: 'markers',
                 name: `${legend3}`,
                 hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
                 type: 'scatter',
                 marker: {
              symbol: `${value6}`,
                 opacity:`${opac}` ,
                 color: `${color3}`,
                 size: `${value}`
                  }
               },
               { x: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
                 y: [5, 5, 5, 5, 5, null, null, 5, 5, 5],
                 mode: 'markers',
                 name: `${legend4}`,
                 hovertemplate: ' Value of x: %{x}<br> Value of y: %{y}<br>',
                 type: 'scatter',
                 marker: {
              symbol: `${value6}`,
                 opacity:`${opac}` ,
                 color: `${color4}`,
                 size: `${value}`
                  }
               }
        ]}
        layout={ {width: 750, height: 520, title:`${name}`, showlegend:true,
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
  }} }
      />
      
      </div>
    );
  }
}

export default Dot;