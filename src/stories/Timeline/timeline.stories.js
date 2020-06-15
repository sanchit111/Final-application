import React from 'react';

import Timeline from './Circle-Timeline';
import Line from './Column+line';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Timeline',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Circular_Timeline = () => <Timeline/>;
  export const Column_Line = () => <Line />;