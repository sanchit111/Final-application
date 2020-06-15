import React from 'react';
import Area from './Diverge-Chart';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Diverging Grouped Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Diverge_Chart = () => <Area/>;
  