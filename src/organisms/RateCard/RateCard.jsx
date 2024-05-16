import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { Frame, RateItem } from '@/molecules'
import './RateCard.styles.scss'

export const RateCard = ({label, dataset}) => {
  const [totalRate, setTotalRate] = useState(0)

  useEffect(() => {
    let total = 0;

    dataset.forEach((item) => {
      total += item.rate
    })

    setTotalRate(total)
  }, [dataset])
  
  return (
    <>
        <Frame label={ label } showFooter={ true }>
          <div className="rate-card">
            {dataset.slice(0, 8).map((item, key) => (
              <div key={key}>
                <RateItem totalRate={totalRate} {...item} />
              </div>
            ))}
          </div>
        </Frame>
    </>
  )
}

RateCard.propTypes = {
  label: PropTypes.string.isRequired,
  dataset: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string.isRequired,
    rate: PropTypes.number.isRequired,
  })).isRequired
}