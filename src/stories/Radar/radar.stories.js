import React from 'react';

import Radar from './Radar-Chart';
import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Radar',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Radar_Chart = () => <Radar/>;