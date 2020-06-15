import React from 'react';
import Candlestick from './Candlestick-Chart';


import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Candlestick-Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const Candlestick_Chart = () => <Candlestick />;