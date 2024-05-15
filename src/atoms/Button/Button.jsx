import React from 'react';
import PropTypes from 'prop-types'

import './Button.styles.scss'

export const Button = ({children, onClick, hasAlert = false, btnClass = ''}) => {
  return (
    <>
      <button 
        className={`btn ${hasAlert ? 'btn-alert' : ''} ${btnClass}`} 
        onClick={onClick}>
        { children }
      </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  hasAlert: PropTypes.bool,
  btnClass: PropTypes.string,
}