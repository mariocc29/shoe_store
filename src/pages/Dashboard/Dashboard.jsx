import React from 'react';

import { Stats, InventoryChart } from '@/organisms';
import './Dashboard.styles.scss'

export const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <header><h4>Dashboard</h4></header>
        <main className='row'>
          <article className='col-sm-12 col-md-12 col-lg-10 overview'>
            <Stats />
            <InventoryChart/>
            <div className='inventory-table'>Table</div>
          </article>
          <article className='col-sm-12 col-md-12 col-lg-2'>
            <div className="row">
              <div className='col-sm-12 col-md-6 col-lg-12'>
                Top rate by stores
              </div>
              <div className='col-sm-12 col-md-6 col-lg-12'>
                Top rate by models
              </div>
            </div>
          </article>
        </main>
      </section>
    </>
  )
}
