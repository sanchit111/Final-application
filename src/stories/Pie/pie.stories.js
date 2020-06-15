import React from 'react';
import Pie from './Pie-Chart';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Pie Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Pie_Chart = () => <Pie/>;