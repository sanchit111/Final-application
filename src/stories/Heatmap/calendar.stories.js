import React from 'react';

import Heatmap from './Calendar-Heatmap';
import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Heatmap',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Calendar_Heatmap = () => <Heatmap/>;
  