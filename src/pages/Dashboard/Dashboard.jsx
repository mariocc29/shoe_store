import React, { useEffect } from 'react';

import { Stats, InventoryChart, InventoryTable, RateCard } from '@/organisms';
import { useWebSocket } from '@/hooks'
import './Dashboard.styles.scss'

export const Dashboard = () => {
  const datasetStores = [
    { label: 'ALDO Centre Eaton', rate: 3800},
    { label: 'ALDO Holyoke Mall', rate: 2500},
  ]

  const datasetModels = [
    { label: 'ADERI', rate: 100},
    { label: 'CAELAN', rate: 25},
  ]

  useWebSocket((message) => {
    console.log(message)
  })

  return (
    <>
      <section className="dashboard">
        <header><h4>Dashboard</h4></header>
        <main className='row'>
          <article className='col-sm-12 col-md-12 col-lg-9 overview'>
            <Stats />
            <InventoryChart />
            <InventoryTable />
          </article>
          <article className='col-sm-12 col-md-12 col-lg-3'>
            <div className="row">
              <div className='col-sm-12 col-md-6 col-lg-12'>
                <RateCard label='Top Rate by Stores' dataset={ datasetStores } />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-12'>
                <RateCard label='Top Rate by Models' dataset={ datasetModels } />
              </div>
            </div>
          </article>
        </main>
      </section>
    </>
  )
}
