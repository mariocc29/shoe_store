import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useChartArea, useInterval } from '@/hooks';
import { Frame } from '@/molecules'

export const InventoryChart = ({inventory}) => {
  const [labels, setLabels] = useState();
  const [dataset, setDataset] = useState();
  const draw = useChartArea(labels, dataset);
  const minutesAgoDate = useInterval();

  const generateGroupLabel = (dateString) => {
    const date = new Date(dateString);
    const hour = date.getHours();
    const minute = String(date.getMinutes()).padStart(2, '0');

    return `${hour}:${minute}`;
  }

  const generateGroupByTime = (inventory) => {
    const groups = {}
      
    inventory.filter(item => new Date(item.created_at) > minutesAgoDate)
      .forEach(item => {
        const key = generateGroupLabel(item.created_at);
        
        if(!(key in groups)){
          groups[key] = [];
        }

        groups[key].push({store: item.store_id, model: item.model_id, stock: item.stock});
      })
    
    return groups
  } 

  useEffect(() => {
    if(inventory.length > 0){
      const groupsByTime = generateGroupByTime(inventory)
      const groups = {}
      
      Object.keys(groupsByTime).forEach((groupKey) => {
        const latestRecords = groupsByTime[groupKey].reduce((acc, curr) => {
          const key = `${curr.store}-${curr.model}`;
          acc[key] = curr.stock;
          return acc;
        }, {})
        
        const totalStock = Object.values(latestRecords).reduce((acc, curr) => acc + curr, 0)
        groups[groupKey] = totalStock;
      })

      setLabels(Object.keys(groups))
      setDataset(Object.values(groups))
    }
  }, [inventory, minutesAgoDate]);

  return (
    <>
      <Frame label='Inventory Report'>
        { draw() }
      </Frame>
    </>
  )
}

InventoryChart.propTypes = {
  inventory: PropTypes.arrayOf(PropTypes.object).isRequired
}

