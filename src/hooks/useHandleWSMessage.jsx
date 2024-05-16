import React, { useState, useEffect } from 'react'
import { useWebSocket, useDatasetTopRate } from '@/hooks'

export const useHandleWSMessage = () => {
  const [message, setMessage] = useState(null);
  const [stats, setStats] = useState(null);
  const [topRateStores, setTopRateStores] = useState([]);
  const [topRateModels, setTopRateModels] = useState([]);

  const handleMessage = ({type, data}) => {
    switch (type) {
      case 'stat_store':
        handleStatStoreMessage(data)
        break;
      
      case 'stat_model':
        handleStatModelMessage(data)
        break;
      
      case 'stat_inventory':
        handleStatInventoryMessage(data)

        const { getStores, getModels } = useDatasetTopRate(data.current_inventory)
        setTopRateStores( getStores() );
        setTopRateModels( getModels() );
        break;

      case 'inventory':
        console.log(data)
        break;
    }
  }

  const handleStatStoreMessage = (data) => {
    setStats(prevStats => ({
      ...prevStats,
      store: {
        total: data.total, 
        growth: {
          changeInCount: data.stores_growth.change_in_count, 
          percentageChange: data.stores_growth.percentage_change
        }
      }
    }));
  }

  const handleStatModelMessage = (data) => {
    setStats(prevStats => ({
      ...prevStats,
      model: {
        total: data.total, 
        growth: {
          changeInCount: data.models_growth.change_in_count, 
          percentageChange: data.models_growth.percentage_change
        }
      }
    }));
  }

  const handleStatInventoryMessage = (data) => {
    setStats(prevStats => ({
      ...prevStats,
      inventory: {
        total: data.total, 
        growth: {
          changeInCount: data.inventory_growth.change_in_count, 
          percentageChange: data.inventory_growth.percentage_change
        }
      }
    }));
  }

  useWebSocket((message) => setMessage(message))

  useEffect(() => {
    if (message) {
      handleMessage(message)
    }
  }, [message])

  return { stats, topRateStores, topRateModels }
}