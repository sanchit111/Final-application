import React from 'react';
import Contour from './Contour-Plot';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Contour-Plot',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Contour_Plot = () => <Contour />;