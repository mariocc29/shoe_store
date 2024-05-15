import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useChartArea } from '@/hooks/useChartArea';

export const InventoryChart = () => {
  const { draw } = useChartArea()
  
  return (
    <>
      { draw() }
    </>
  )
}

InventoryChart.propTypes = {

}

