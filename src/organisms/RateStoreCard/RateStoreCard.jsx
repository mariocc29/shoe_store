import React from 'react';
import PropTypes from 'prop-types'

import { Frame, RateItem } from '@/molecules'

export const RateStoreCard = () => {
  
  // TODO: Verify how to pass variables by props or by redux
  const dataset = [
    { label: 'ALDO Centre Eaton', rate: 3800},
    { label: 'ALDO Holyoke Mall', rate: 2500},
  ]

  const totalRate = 6300
  
  return (
    <>
      <Frame label='Top Rate by Stores' showFooter={ true }>
        <>
          {dataset.map((item, key) => (
            <div key={key}>
              <RateItem totalRate={totalRate} {...item} />
            </div>
          ))}
        </>
      </Frame>
    </>
  )
}

RateStoreCard.propTypes = {
  
}