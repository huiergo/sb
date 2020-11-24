import React from 'react';
import PropTypes from 'prop-types'
import './tags.css'

export const Tags = ({ tagArr, type, tagItemStyle, ...props }) => {
  const classPrefix = 'as-tags';
  return (
    <div className={`${classPrefix}`}>
      {type === "normal" && tagArr.length > 0 &&
        tagArr.map((item, index) => {
          return (
            <div key={index} className={`${classPrefix}__normal-item`} style={tagItemStyle}>
              {item.name}
            </div>
          );
        })}
      {type === "getCoupon" && tagArr.length > 0 &&
        tagArr.map((item, index) => {
          return (
            <div key={index} className={`${classPrefix}__coupon-item`} style={tagItemStyle}>
              <div className={`${classPrefix}__coupon-item-prex`} >优惠</div>
              <div className={`${classPrefix}__coupon-item-name`} >{item.name}</div>
            </div>
          );
        })}
    </div>
  )
}

Tags.propTypes = {
  /**
   * tagArr's name isRequired
   */
  tagArr: PropTypes.shape({
    name: PropTypes.string.isRequired,
    style: PropTypes.number,
  }),
  /**
   * which type will render
   */
  type: PropTypes.oneOf(['normal', 'getCoupon']),
  /**
   * each tag item style
   */
  tagItemStyle: PropTypes.shape({})
};

Tags.defaultProps = {
  tagArr: [{
    name: '羽毛球'
  }, {
    name: '足球fdkjfkjafj'
  }, {
    name: '足球'
  }, {
    name: '足球'
  }, {
    name: '足球'
  }, {
    name: '足球'
  }, {
    name: '足球fsafjsjfk'
  }
  ],
  tagItemStyle: {
    // height: '40rpx',
    // 'font-size': '20rpx'
  },
  type: "getCoupon"
};
