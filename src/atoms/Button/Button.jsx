import React from 'react';
import PropTypes from 'prop-types'

import './Button.styles.scss'

export const Button = ({children, onClick, hasAlert = false}) => {
  return (
    <>
      <button className={`btn ${hasAlert && 'btn-alert'}`} onClick={onClick}>
        { children }
      </button>
    </>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired,
  hasAlert: PropTypes.bool,
}