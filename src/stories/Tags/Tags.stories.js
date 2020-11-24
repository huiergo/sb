import React from 'react';

import { Tags } from './Tags';

export default {
  title: 'Alisports/Tags',
  component: Tags,
};

const Template = (args) => <Tags {...args} />;

export const Normal = Template.bind({});
Normal.args = {
  tagArr: [{
    name: '篮球'
  }, {
    name: '足球' 
  }, {
    name: '羽毛球'
  }, {
    name: '乒乓球'
  }
  ],
  tagItemStyle: {
    height: '40rpx',
    backgroudColor: 'red'
  },
  type: "normal"
};

export const Coupon = Template.bind({});
Coupon.args = {
  tagArr: [{
    name: '满100减50'
  }, {
    name: '满199减50'
  }
  ],
  tagItemStyle: {
    height: '40rpx',
    backgroudColor: 'green'
  },
  type: "getCoupon"
};

