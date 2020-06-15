import React from 'react';
import Lines from './Lines-Chart';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Line Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Lines_Chart = () => <Lines />;