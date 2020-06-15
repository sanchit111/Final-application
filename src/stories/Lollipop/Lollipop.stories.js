import React from 'react';
import Lollipop from './Lollipop-Chart';

import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Lollipop Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Lollipop_Chart = () => <Lollipop />;