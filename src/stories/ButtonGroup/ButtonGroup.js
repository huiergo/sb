import React from 'react';
import PropTypes from 'prop-types';
import './buttonGroup.css';

/**
 * Primary UI component for user interaction
 */
export const ButtonGroup = ({ buttons, orientation, ...props }) => {
  console.log("buttons----",buttons)
  return (
    <div className={['storybook-button', `storybook-button--${orientation}`].join(' ')}>
      {buttons}
      <button
        type="button"
      >
       测试
      </button>
       <button
        type="button"
      >
       测试
      </button>
    </div>
  );
};

// ButtonGroup.propTypes = {
//   buttons:PropTypes.array,
//   orientation: PropTypes.oneOf(['hor', 'ver']),
// };

// ButtonGroup.defaultProps = {
//   orientation: 'hor',
 
// };
