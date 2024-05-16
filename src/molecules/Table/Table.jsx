import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types'

import { Paginator } from '@/atoms';
import './Table.styles.scss'

export const Table = ({labels, dataset, options}) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);
  const [currentDataset, setCurrentDataset] = useState([]);

  const screenSizes = {
    'sm': 425,
    'md': 768,
    'lg': 1024,
    'xl': 1441,
  }

  const getColumnDisplayStyle = (cellIndex) => {
    const style = {};

    if (options.hideOn) {
      Object.keys(options.hideOn).forEach((screenSize) => {
        if (window.innerWidth <= screenSizes[screenSize] && options.hideOn[screenSize].includes(cellIndex)) {
          style.display = 'none';
        }
      });
    }

    return style
  }

  const getAlignmentStyle = (key, cellIndex) => {
    const style = getColumnDisplayStyle(cellIndex);

    if (options.alignment && options.alignment[key]) {
      style.textAlign = options.alignment[key];
    }

    return style
  }

  const handlePageChange = (page) => {
    setCurrentPage(page);
  }

  useEffect(() => {
    if(dataset.length > 0) {
      setTotalPages(Math.ceil(dataset.length / options.perPage));
      const startIndex = (currentPage - 1) * options.perPage;
      const endIndex = startIndex + options.perPage;
      setCurrentDataset(dataset.slice(startIndex, endIndex));
    }
  }, [dataset, currentPage])

  return (
    <>
      <div className='data-table'>
        <div>
          <table>
            <thead>
              <tr>
                {labels.map((label, cellIndex) => (
                  <th key={cellIndex} style={getColumnDisplayStyle(cellIndex)}>{label}</th>
                ))}
              </tr>
            </thead>

            <tbody>
              {currentDataset.map((rowData, rowIndex) => (
                <tr className='data-row' key={rowIndex}>
                  {Object.keys(rowData).map((key, cellIndex) => (
                    <td key={cellIndex} style={getAlignmentStyle(key, cellIndex)}>{rowData[key]}</td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div>
          <div className='footer'>
            <Paginator currentPage={currentPage} totalPages={totalPages} onClick={handlePageChange} />
          </div>
        </div>
      </div>
    </>
  )
}

Table.propTypes = {
  labels: PropTypes.arrayOf(PropTypes.string).isRequired,
  dataset: PropTypes.arrayOf(PropTypes.object).isRequired,
  options: PropTypes.shape({
    perPage: PropTypes.number.isRequired,
    alignment: PropTypes.objectOf(PropTypes.oneOf(['left', 'center', 'right'])),
    hideOn: PropTypes.objectOf(PropTypes.arrayOf(PropTypes.number)),
  }).isRequired,
}