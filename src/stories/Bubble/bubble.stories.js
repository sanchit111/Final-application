import React from 'react';
import Bubble from './Bubble-Chart';
import Ordered from './Ordered-Proportional-Symbol';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Bubble Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Bubble_Chart = () => <Bubble />;
  export const Ordered_Proportional_Symbol = () => <Ordered />;