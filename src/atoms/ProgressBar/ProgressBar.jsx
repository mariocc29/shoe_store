import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import './ProgressBar.styles.scss'

export const ProgressBar = ({width}) => {
  const [progressClass, setProgressClass] = useState()
  const [clampedWidth, setClampedWidth] = useState()

  useEffect(() => {
    const clampedWidthValue = Math.min(Math.max(width, 0), 100);
    setClampedWidth( clampedWidthValue );

    if (clampedWidthValue < 25) {
      setProgressClass('progress-bar-alert');
    } else if ( clampedWidthValue > 75 ) {
      setProgressClass('progress-bar-success');
    } else {
      setProgressClass('progress-bar-warning');
    }
  }, [width])

  return (
    <>
      <div className="progress">
        <div className={`progress-bar ${progressClass}`} style={{ width: `${clampedWidth}%` }} />
      </div>
    </>
  )
}

ProgressBar.propTypes = {
  width: PropTypes.number.isRequired
}