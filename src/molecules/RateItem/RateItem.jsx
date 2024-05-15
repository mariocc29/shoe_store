import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { ProgressBar } from '@/atoms'
import './RateItem.styles.scss'

export const RateItem = ({label, rate, totalRate}) => {
  const [rateFormatted, setRateFormatted] = useState()
  const [percentage, setPercentage] = useState()

  useEffect(() => {
    
    if (rate >= 1000000000) {
      setRateFormatted((rate / 1000000000).toFixed(1) + 'B')
    } else if (rate >= 1000000) {
      setRateFormatted((rate / 1000000).toFixed(1) + 'M')
    } else if (rate >= 1000) {
      setRateFormatted((rate / 1000).toFixed(1) + 'K')
    } else {
      setRateFormatted(rate)
    }

    setPercentage((rate / totalRate) * 100)

  }, [rate, totalRate])
  
  return (
    <>
      <div className="rate-item">
        <div className='info'>
          <div className='caption'>{ label }</div>
          <div className='caption bold'>{ rateFormatted }</div>
        </div>
        <div>
          <ProgressBar width={percentage}/>
        </div>
      </div>
    </>
  )
}

RateItem.propTypes = {
  label: PropTypes.string.isRequired,
  rate: PropTypes.number.isRequired,
  totalRate: PropTypes.number.isRequired,
}