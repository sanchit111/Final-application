/* global Plotly:true */

import React, { Component } from 'react';


import Plot from 'react-plotly.js';

import {text, color,number,select} from "@storybook/addon-knobs";

class Tree extends Component {
  render() {
    const name = text("Title", "Treemap");
    const options = ["top left","top center","top right","middle left","middle center","middle right","bottom left","bottom center","bottom right"]
    const value = select("Position of text", options, "top left");
    const label = 'Opacity';
    const options1 = {
      range: true,
      min: 0,
      max: 1,
      step: 0.1,
   };
    const opac = number(label, 1, options1);
    const options2 = ["label", "label+text+value", "all","percent root", "percent entry","none","percent parent"]
    const info = select("Hoverinfo", options2, "all");
    const width = number("Line Width", 2);
    const color1 = color("Outside text color","#377eb8");
    const options3 = ["remainder","total"]
    const value1 = select("Branchvalues", options3, "remainder");
    const options4 = ["branches", "leaves", "branches+leaves"]
    const count = select("Count", options4, "remainder");
    const options5 = ["squarify","binary" , "dice","slice","slice-dice","dice-slice" ]
    const pack = select("Count", options5, "squarify");
    const pad = number("Tiling Padding", 3);
    const options6 = [ "Arial", "Balto", "Courier New", "Droid Sans","Gravitas One", "Old Standard TT", "Open Sans", "Raleway", "Times New Roman"]
    const font = select("Outside text font", options6, "Arial");
    
    
    
    return (
      <div className="body">
      <Plot className="plot"
        data={[
            {
                  type: "treemap",
                  labels: ["Eve", "Cain", "Seth", "Enos", "Noam", "Abel", "Awan", "Enoch", "Azura"],
                  parents: ["", "Eve", "Eve", "Seth", "Seth", "Eve", "Eve", "Awan", "Eve" ],
                  textposition:`${value}`,
                  opacity:`${opac}`,
                  hoverinfo: `${info}`,
                  outsidetextfont: {"size": 20, "color":`${color1}`, "family":`${font}` },
                  marker: {"line": {"width": `${width}`}},
                  branchvalues:`${value1}`,
                  count:`${count}`,
                  tiling:{
                    packing:`${pack}`,
                    pad:`${pad}`
                  },
                  
                  
                }

        ]}
        layout={ {width: 750, height: 520, title:`${name}`} }
      />
      
      </div>
    );
  }
}

export default Tree;