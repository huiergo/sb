import React from 'react'
import {Table} from './Table'


export default {
  title: 'Alisports/Table',
  component: Table,


};
const Template = (args) => <Table {...args} />;

export const Rank = Template.bind({});
Rank.args = {
 
};


export const Player = Template.bind({});
Player.args = {
  type:'player',
  headerList: [
    '姓名',
    '国籍',
    '位置',
    '球衣号',
  ],
  contentList: [
    {
    "winTime": 6,
    "loseTimes": 3,
    "team": "曼城",
    "matchTimes": 1,
    "goalsAgainst": 10,
    "goalDifference": 5,
    "drawTimes": 1,
    "point": 10,
    "goals": 20
  }, {
    "winTime": 6,
    "loseTimes": 3,
    "team": "曼城",
    "matchTimes": 1,
    "goalsAgainst": 10,
    "goalDifference": 5,
    "drawTimes": 1,
    "point": 10,
    "goals": 20
  },
  {
    "winTime": 6,
    "loseTimes": 3,
    "team": "曼城",
    "matchTimes": 1,
    "goalsAgainst": 10,
    "goalDifference": 5,
    "drawTimes": 1,
    "point": 10,
    "goals": 20
  }, {
    "winTime": 6,
    "loseTimes": 3,
    "team": "曼城",
    "matchTimes": 1,
    "goalsAgainst": 10,
    "goalDifference": 5,
    "drawTimes": 1,
    "point": 10,
    "goals": 20
  }
  ]
};