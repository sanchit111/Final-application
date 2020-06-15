import React from 'react';
import Bar from './Bar-Chart';
import Violin from './Violin-Chart';
import Column from './Column-Chart';
import Pair from './Paired';
import Hist from './Histogram';
import Population from './Pyramid';
import Order from './Ordered';
import Stack from './Stacked';
import Diverge from './Diverging';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Bar Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Bar_Chart = () => <Bar />;
  export const Violin_Chart = () => <Violin/>;
  export const Column_Chart = () => <Column />;
  export const Paired = () => <Pair/>;
  export const Histogram = () => <Hist />;
  export const Pyramid = () => <Population />;
  export const Ordered = () => <Order />;
  export const Stacked = () => <Stack />;
  export const Diverging = () => <Diverge />;