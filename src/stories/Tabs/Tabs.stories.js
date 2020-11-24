import React from 'react';

import { Tabs } from './Tabs';

export default {
  title: 'Alisports/Tabs',
  component: Tabs,
  // argTypes: { onClick: { action: 'clicked' } }
    parameters: { actions: { argTypesRegex: '^on.*' } },
  //   parameters: {
  //   actions: {
  //     handles: ['mouseover', 'click .btn'],
  //   },
  // },

};

const Template = (args) => <Tabs {...args} />;

export const Basic = Template.bind({});
Basic.args = {
 
};
