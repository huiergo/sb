import React from 'react'
import PropTypes from 'prop-types'
import './empty.css'

export const Empty = ({ uri, text, ...props }) => {
  return (
    <view className="empty-default" {...props}>
      <img className={'empty-default__img '} src={uri} />
      {
        text ? <view className="empty-default__text">{text}</view> : null
      }
    </view>
  )
}

Empty.propTypes = {
  /**
   * 图片地址
   */
  uri: PropTypes.string.isRequired,
  /**
  * 文字描述
  */
  text: PropTypes.string,
};

Empty.defaultProps = {
  uri:'https://gw.alicdn.com/tfs/TB1OlDY1kT2gK0jSZFkXXcIQFXa-218-208.png',
  text:'暂无信息'
}