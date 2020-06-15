import React from 'react';
import Waterfall from './Waterfall-Chart';


import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Waterfall-Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Waterfall_Chart = () => <Waterfall />;
  