import React from 'react';
import Scatter from './Basic-Scatter-Plot';
import Connected from './Connected-Scatter';
import Dot from './Dot-Strip';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Scatter Plot',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Basic_Scatter_Plot = () => <Scatter/>;
  export const Connected_Scatter_Plot = () => <Connected/>;
  export const Dot_Strip_Plot = () => <Dot/>;