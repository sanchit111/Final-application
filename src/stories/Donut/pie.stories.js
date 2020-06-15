import React from 'react';
import Pie from './Donut-Chart';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Donut Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Donut_Chart = () => <Pie/>;