import React from 'react';
import PropTypes from 'prop-types'

import './Table.styles.scss'

export const Table = ({labels, dataset, options}) => {

  const screenSizes = {
    'sm': 425,
    'md': 768,
    'lg': 1024,
    'xl': 1441,
  }

  const getColumnDisplayStyle = (cellIndex) => {
    const style = {};

    if (options && options.hideOn) {
      Object.keys(options.hideOn).forEach((screenSize) => {
        console.log(screenSize, window.innerWidth)
        if (window.innerWidth <= screenSizes[screenSize] && options.hideOn[screenSize].includes(cellIndex)) {
          style.display = 'none';
        }
      });
    }

    return style
  }

  const getAlignmentStyle = (key, cellIndex) => {
    const style = getColumnDisplayStyle(cellIndex);

    if (options && options.alignment && options.alignment[key]) {
      style.textAlign = options.alignment[key];
    }

    return style
  }

  return (
    <>
      <table className='data-table'>
        <thead>
          <tr>
            {labels.map((label, cellIndex) => (
              <th key={cellIndex} style={getColumnDisplayStyle(cellIndex)}>{label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {dataset.map((rowData, rowIndex) => (
            <tr className='data-row' key={rowIndex}>
              {Object.keys(rowData).map((key, cellIndex) => (
                <td key={cellIndex} style={getAlignmentStyle(key, cellIndex)}>{rowData[key]}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </>
  )
}

Table.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataset: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.shape({
    alignment: PropTypes.objectOf(PropTypes.oneOf(['left', 'center', 'right'])),
    hideOn: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.number)),
  }),
}