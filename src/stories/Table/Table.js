import React from 'react'
import PropTypes, { oneOf } from 'prop-types'
import './table.css'

export const Table = ({ headerList, contentList, type, ...props }) => {

  const classPre = "table"
  return (
    <view className={`${classPre}`}>
      <view className={`${classPre}__header`}>
        {headerList.map((item, index) => (<view className={`${classPre}__header-item ${classPre}__header-item-${index} `}>{item}</view>))}
      </view>
      <view className={`${classPre}__content`} x-if={type == 'rank'}>
        {
          contentList.map((item, index) => (
            <view className={`${classPre}__line ${classPre}__line-${index}`}>
              <view className={`${classPre}__col ${classPre}__col-0`} style={{ width: '300rpx' }}>
                <view className={`${classPre}__rank`}>{item.rank}</view>
                <img x-if={item.logo} className={`${classPre}__logo`} src={item.logo} />
                <view className={`${classPre}__name`}>{item.team}</view>
              </view>
              <view className={`${classPre}__col`}>{item.matchTimes}</view>
              <view className={`${classPre}__col`}>{item.goalDifference}</view>
              <view className={`${classPre}__col`}>{item.point}</view>
            </view>
          ))
        }
      </view>
      <view className={`${classPre}__content`} x-if={type == 'player'}>
        {
          contentList.map((item, index) => (
            <view className={`${classPre}__line ${classPre}__line-${index}`}>
              <view className={`${classPre}__col ${classPre}__col-0`} style={{ width: '300rpx' }}>
                <view className={`${classPre}__name`}>{item.name}</view>
              </view>
              <view className={`${classPre}__col ${classPre}__col-player`}>{item.countryZh}</view>
              <view className={`${classPre}__col ${classPre}__col-player`}>{item.jobTitle}</view>
              <view className={`${classPre}__col`}>{item.number}</view>
            </view>
          ))
        }
      </view>
    </view>)
}

Table.propTypes = {
  headerList:PropTypes.array,
  contentList:PropTypes.array,
  type:PropTypes.oneOf(['rank','player']),
}

Table.defaultProps = {
  headerList:[
    '球队',
    '已赛场次',
    '净胜球',
    '积分',
  ],
  contentList:[
    {
    "winTime": 6,
    "logo": "https://gw.alicdn.com/tfs/TB1_0cz1lr0gK0jSZFnXXbRRXXa-360-360.png",
    "loseTimes": 3,
    "rank": 1,
    "team": "曼城",
    "matchTimes": 1,
    "goalsAgainst": 10,
    "goalDifference": 5,
    "drawTimes": 1,
    "point": 10,
    "goals": 20
  }, {
    "winTime": 6,
    "logo": "https://gw.alicdn.com/tfs/TB1_0cz1lr0gK0jSZFnXXbRRXXa-360-360.png",
    "loseTimes": 3,
    "rank": 1,
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
    "logo": "https://gw.alicdn.com/tfs/TB1_0cz1lr0gK0jSZFnXXbRRXXa-360-360.png",
    "loseTimes": 3,
    "rank": 1,
    "team": "曼城",
    "matchTimes": 1,
    "goalsAgainst": 10,
    "goalDifference": 5,
    "drawTimes": 1,
    "point": 10,
    "goals": 20
  }, {
    "winTime": 6,
    "logo": "https://gw.alicdn.com/tfs/TB1_0cz1lr0gK0jSZFnXXbRRXXa-360-360.png",
    "loseTimes": 3,
    "rank": 1,
    "team": "曼城",
    "matchTimes": 1,
    "goalsAgainst": 10,
    "goalDifference": 5,
    "drawTimes": 1,
    "point": 10,
    "goals": 20
  }
  ],
  type:'rank',
}