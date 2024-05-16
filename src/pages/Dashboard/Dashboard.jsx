import React from 'react';

import { Stats, InventoryChart, InventoryTable, RateCard } from '@/organisms';
import { useHandleWSMessage } from '@/hooks'
import './Dashboard.styles.scss'

export const Dashboard = () => {
  const { stats, topRateStores, topRateModels } = useHandleWSMessage();

  return (
    <>
      <section className="dashboard">
        <header><h4>Dashboard</h4></header>
        <main className='row'>
          <article className='col-sm-12 col-md-12 col-lg-9 overview'>
            <Stats stats={stats} />
            <InventoryChart />
            <InventoryTable />
          </article>
          <article className='col-sm-12 col-md-12 col-lg-3'>
            <div className="row">
              <div className='col-sm-12 col-md-6 col-lg-12'>
                <RateCard label='Top Rate by Stores' dataset={ topRateStores } />
              </div>
              <div className='col-sm-12 col-md-6 col-lg-12'>
                <RateCard label='Top Rate by Models' dataset={ topRateModels } />
              </div>
            </div>
          </article>
        </main>
      </section>
    </>
  )
}
