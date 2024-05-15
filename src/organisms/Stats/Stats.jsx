import React from 'react'

import { StatCard } from '@/molecules'

export const Stats = () => {

  // TODO: Verify how to pass variables by props or by redux
  const store = {total: 10, growth: {changeInCount: -1, percentageChange: 0.3} }
  const model = {total: 20, growth: {changeInCount: 0, percentageChange: 0} }
  const inventory = {total: 9200, growth: {changeInCount: 1, percentageChange: 12} }

  return (
    <>
      <div className='row'>
        <div className='col-sm-12 col-md-4'>
          <StatCard instance='store' data={ store } />
        </div>
        <div className='col-sm-12 col-md-4'>
          <StatCard instance='model' data={ model } />
        </div>
        <div className='col-sm-12 col-md-4'>
          <StatCard instance='inventory' data={ inventory } />
        </div>
      </div>
    </>
  )
}

