import React from 'react';

import { StatCard } from '@/molecules';
import './Dashboard.styles.scss'

export const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <header><h4>Dashboard</h4></header>
        <main>
          <article>
            <div className='stats'>
              <div>
                <StatCard instance='store' data={ {total: 10, growth: {changeInCount: -1, percentageChange: 0.3}} } />
              </div>
              <div>
                <StatCard instance='model' data={ {total: 20, growth: {changeInCount: 0, percentageChange: 0}} } />
              </div>
              <div>
                <StatCard instance='inventory' data={ {total: 9200, growth: {changeInCount: 1, percentageChange: 12}} } />
              </div>
            </div>
            <div className='inventory-chart'>Chart</div>
            <div className='inventory-table'>Table</div>
          </article>
          <article>
            <div className='top-rate'>Top rate by stores</div>
            <div className='top-rate'>Top rate by models</div>
          </article>
        </main>
      </section>
    </>
  )
}
