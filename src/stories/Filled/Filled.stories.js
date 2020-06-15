import React from 'react';
import Filled from './Filled-Area';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Filled-Area',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Filled_Area = () => <Filled />;