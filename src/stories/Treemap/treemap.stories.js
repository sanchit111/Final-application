import React from 'react';

import Tree from './Treemap';
import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Treemap',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Treemap = () => <Tree/>;