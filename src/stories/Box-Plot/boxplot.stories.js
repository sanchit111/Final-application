import React from 'react';

import BoxPlot from './Box-Plot';
import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Box Plot',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Box_Plot = () => <BoxPlot/>;