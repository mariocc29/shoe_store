import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import './StatIndicator.styles.scss'

export const StatIndicator = ({ changeInCount, percentageChange }) => {
  const [icon, setIcon] = useState()
  const [statClass, setStatClass] = useState()

  useEffect(() => {
    if (changeInCount > 0){
      setIcon('icon-arrow-up')
      setStatClass('success')
    } else if (changeInCount < 0) {
      setIcon('icon-arrow-down')
      setStatClass('alert')
    } else {
      setIcon('icon-minus')
      setStatClass('warning')
    }
  }, [changeInCount])

  return (
    <>
      <div className={`stat-indicator stat-indicator-${statClass}`}>
        <div className={`indicator indicator-${statClass}`}>
          <i className={ icon } />
        </div>
        <div className='caption bold percentage'>{ percentageChange }</div>
      </div>
    </>
  )
}

StatIndicator.propTypes = {
  changeInCount: PropTypes.number.isRequired,
  percentageChange: PropTypes.number.isRequired,
}