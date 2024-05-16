import React, { useState, useEffect } from 'react'

import { StatCard } from '@/molecules'

export const Stats = ({stats}) => {

  const initialState = {total: 0, growth: {changeInCount: 0, percentageChange: 0} }

  const [store, setStore] = useState(initialState)
  const [model, setModel] = useState(initialState)
  const [inventory, setInventory] = useState(initialState)

  useEffect(() => {
    
    if(stats){
      if(stats.store) {
        setStore(stats.store)
      }

      if(stats.model) {
        setModel(stats.model)
      }

      if(stats.inventory) {
        setInventory(stats.inventory)
      }
    }

  }, [stats])

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

