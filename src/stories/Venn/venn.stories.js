import React from 'react';

import Venn from './Venn-Diagram';
import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Venn',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Venn_Diagram = () => <Venn/>;