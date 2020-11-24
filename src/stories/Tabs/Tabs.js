import React, { useState } from 'react';
import PropTypes from 'prop-types'
import { action } from '@storybook/addon-actions'
import './tabs.css'

export const Tabs = ({ tabs, onTabClick, ...props }) => {
  console.log("[action---]",action)
  const [tabIndex, setTabIndex] = useState(0);
  const handelClickTab = (index) => {
    setTabIndex(index);
    onTabClick(index);
   
  };
  return (
    <div className="tab">
      {
        tabs.map((item, index) => (
          <div key={item} className={`tab-item ${index === tabIndex ? 'tab--active' : ''}`} onClick={()=>handelClickTab(index)} >
            {item}
            {
              index === tabIndex &&
              <div className="tab--active-bar">
                <div className="tab--active-bar-inner" />
              </div>
            }
          </div>
        ))
      }
    </div>
  )
}

Tabs.propTypes = {
  /**
   * tagArr's name isRequired
   */
  tabs: PropTypes.array.isRequired,

  /**
   * each tag item style
   */
  onTabClick: PropTypes.func.isRequired,
};

Tabs.defaultProps = {
  tabs: ['视频', '赛程', '球队'],
  onTabClick: (index) =>console.log('clicked!')
}