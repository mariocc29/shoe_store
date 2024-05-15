import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import { useChartArea } from '@/hooks';
import { Frame } from '@/molecules'

export const InventoryChart = () => {
  
  // TODO: Verify how to pass variables by props or by redux
  
  const [labels, setLabels] = useState()
  const [dataset, setDataset] = useState()
  const { draw } = useChartArea(labels, dataset)

  useEffect(() => {
    setLabels(['15:20', '15:22', '15:24', '15:26', '15:28', '15:30'])
    setDataset([100, 40, 60, 20, 90, 75])
  }, []);

  return (
    <>
      <Frame label='Inventory Report'>
        { draw() }
      </Frame>
    </>
  )
}

InventoryChart.propTypes = {

}

