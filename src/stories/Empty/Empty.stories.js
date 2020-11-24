import React from 'react';

import { Empty } from './Empty';

export default {
  title: 'Alisports/Empty',
  component: Empty,
  parameters: { actions: { argTypesRegex: '^on.*' } },
};

const Template = (args) => <Empty {...args} />;

export const Basic = Template.bind({});
Basic.args = {
 
};
