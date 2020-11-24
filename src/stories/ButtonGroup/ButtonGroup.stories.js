
import React from 'react';


import { ButtonGroup } from './ButtonGroup';

export default {
  title: 'Alisports/ButtonGroup',
  component: ButtonGroup,
};

const Template = (args) => <ButtonGroup {...args} />;

export const Primary = Template.bind({});
Primary.args = {
  orientation:'ver',
  // buttons:[...ButtonStories.Large],
  // buttons:[...ButtonStories.Large],
  // primary: true,
  // label: 'Button',
};
