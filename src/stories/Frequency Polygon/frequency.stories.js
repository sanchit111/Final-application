import React from 'react';
import Frequency from './Frequency-Polygon';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Frequency Polygon',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Frequency_Polygon = () => <Frequency />;
  