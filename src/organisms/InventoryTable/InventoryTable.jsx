import React from 'react';
import PropTypes from 'prop-types'

import { Table } from '@/molecules'
import { Tag } from '@/atoms'

export const InventoryTable = () => {
  
  // TODO: Verify how to pass variables by props or by redux
  const labels = ['Store', 'Model', 'Inventory', 'Status', 'Date']
  const dataset = [
    {store: 'ALDO Centre Eaton', model: 'ADERI', inventory: 10, status: <Tag tagClass='low' />, date: 'May 4th, 2024'},
    {store: 'ALDO Destiny USA Mall', model: 'CAELAN', inventory: 46, status: <Tag tagClass='standard' />, date: 'May 4th, 2024'},
  ]
  const options = {
    alignment: { model: 'center', inventory: 'right', status: 'center', date: 'right' },
    hideOn: { sm: [3, 4] }
  }

  return (
    <>
      <Table labels={labels} dataset={dataset} options={ options } />
    </>
  )
}

Tag.propTypes = {
  
}