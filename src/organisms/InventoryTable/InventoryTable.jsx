import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types'

import { useInterval } from '@/hooks';
import { Table } from '@/molecules'
import { Tag } from '@/atoms'

export const InventoryTable = ({inventory}) => {
  const [dataset, setDataset] = useState([]);
  const minutesAgoDate = useInterval();
  
  const labels = ['Store', 'Model', 'Inventory', 'Status', 'Date'];
  const options = {
    alignment: { model: 'center', inventory: 'right', status: 'center', date: 'right' },
    hideOn: { sm: [3, 4] },
    perPage: 5,
  };

  const getStatus = (stock) => {
    let status = 'standard'

    if(stock < 25){
      status = 'low'
    } else if(stock > 75) {
      status = 'high'
    }

    return <Tag tagClass={status} />
  }

  const formatDate = (date_string) => {
    const date = new Date(date_string);

    const year = date.getFullYear();
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    const hour = String(date.getHours()).padStart(2, '0');
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${year}-${month}-${day} ${hour}:${minute}`;
  }

  useEffect(() => {
    if(inventory.length > 0){
      const inventoryFormatted = inventory.filter(item => new Date(item.created_at) > minutesAgoDate)
        .sort((a, b) => (new Date(a.created_at) > new Date(b.created_at)) ? -1 : 1)
        .map(item => {
          return {
            store: item.store.name,
            model: item.model.name,
            inventory: item.stock,
            status: getStatus(item.stock),
            date: formatDate(item.created_at)
          }
        });
      
      setDataset(inventoryFormatted)
    }
  }, [inventory, minutesAgoDate]);

  return (
    <>
      <Table labels={labels} dataset={dataset} options={ options } />
    </>
  )
}

InventoryTable.propTypes = {
  inventory: PropTypes.arrayOf(PropTypes.object).isRequired
}