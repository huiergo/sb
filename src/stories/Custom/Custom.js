import React from 'react';
import PropTypes from 'prop-types';
import './custom.css';

export const Custom = ({ source, desciption, onTapCustom }) => (
  <view className="custom-button" onClick={()=>onTapCustom()}>
    <img className="custom-img" mode="widthFix" src={source} />
    <view className="custom-des">{desciption}</view>
  </view>
);

Custom.propTypes = {
  source: PropTypes.string,
  desciption: PropTypes.string.isRequired,
  onTapCustom: PropTypes.func,
};

Custom.defaultProps = {
  source: 'https://gw.alicdn.com/tfs/TB1HBpcp9R26e4jSZFEXXbwuXXa-48-48.png',
  desciption:'还有问题？联系客服',
  onTapCustom:()=>console.log("跳转客服链接")
};
