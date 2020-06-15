import React from 'react';

import Sankey from './Sankey';
import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Sankey',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Sankey_Diagram = () => <Sankey/>;