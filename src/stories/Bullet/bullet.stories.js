import React from 'react';
import Bullet from './Basic-Bullet';


import { withKnobs } from "@storybook/addon-knobs";

export default { title: 'Bullet-Chart',
decorators: [withKnobs] };

// Basic render of bar graph  

  export const BulletChart = () => <Bullet/>;
  