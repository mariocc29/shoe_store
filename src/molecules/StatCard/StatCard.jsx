import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { StatIndicator } from '@/atoms'
import './StatCard.styles.scss'

export const StatCard = ({ instance, data }) => {
  const [cardLabel, setCardLabel] = useState()
  const [cardIcon, setCardIcon] = useState()
  const [totalFormatted, setTotalFormatted] = useState()

  const labels = {
    'store': 'Total of stores',
    'model': 'Total of models',
    'inventory': 'Total of inventory'
  }

  const icons = {
    'store': 'icon-store',
    'model': 'icon-box-open',
    'inventory': 'icon-shelves'
  }

  useEffect(() => {
    setCardLabel( labels[instance] )
    setCardIcon( icons[instance] )
  }, [instance])

  useEffect(() => {
    if (data['total'] >= 1000000000) {
      setTotalFormatted((data['total'] / 1000000000).toFixed(1) + 'B')
    } else if (data['total'] >= 1000000) {
      setTotalFormatted((data['total'] / 1000000).toFixed(1) + 'M')
    } else if (data['total'] >= 1000) {
      setTotalFormatted((data['total'] / 1000).toFixed(1) + 'K')
    } else {
      setTotalFormatted(data['total'])
    }
  }, [data['total']])
  
  return (
    <>
      <div className='stat-card'>
        <div className='card'>
          <div className='info'>
            <div className='info-label'>{ cardLabel }</div>
            <div className='info-data'>
              <div><h4>{ totalFormatted }</h4></div>
              <div><StatIndicator {...data['growth']} /></div>
            </div>
            <div className='info-caption caption'>
              compared to last year
            </div>
          </div>
          <div className='icon-reference'>
            <i className={ cardIcon } />
          </div>
        </div>
      </div>
    </>
  )
}

StatCard.propTypes = {
  instance: PropTypes.string.isRequired,
  data: PropTypes.shape({
    total: PropTypes.number.isRequired,
    growth: PropTypes.shape({
      changeInCount: PropTypes.number.isRequired,
      percentageChange: PropTypes.number.isRequired,
    }).isRequired,
  }).isRequired,
}