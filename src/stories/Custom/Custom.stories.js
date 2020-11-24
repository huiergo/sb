import React from 'react';

import { Custom } from './Custom';

export default {
  title: 'Alisports/Custom',
  component: Custom,
};

const Template = (args) => <Custom {...args} />;

export const Basic = Template.bind({});
Basic.args = {
};
