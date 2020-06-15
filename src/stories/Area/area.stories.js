import React from 'react';
import Area from './Area-Chart';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Area Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Area_Chart = () => <Area/>;
  