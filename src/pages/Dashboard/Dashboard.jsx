import React from 'react';
import './Dashboard.styles.scss'

export const Dashboard = () => {
  return (
    <>
      <section className="dashboard">
        <header><h4>Dashboard</h4></header>
        <main>
          <article>
            <div className='stats'>
              <div>Total stores</div>
              <div>Total models</div>
              <div>Total inventory</div>
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
