import React from 'react';
import { action } from '@storybook/addon-actions';
import { Button } from './Button';
import { Meta, Story, Canvas } from '@storybook/addon-docs/blocks';


// export default {
//   title: 'Alisports/Button',
//   component: Button,
//   argTypes: {
//     backgroundColor: { control: 'color' },
//   },
// };


export default {
  title: 'Button',
  component: Button,
};

export const defaultView = () => <div onClick={action('button-click')}>hello world</div>;

// const Template = (args) => <Button {...args} />;

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
