import React from 'react'
import PropTypes from 'prop-types'

import { Button } from '@/atoms'
import './Frame.styles.scss'

export const Frame = ({label, children, onClick, showFooter = false}) => {

  return (
    <>
      <div className='frame'>
        <div className='header'>
          <span className='subtitle'>{ label }</span>
        </div>
        
        <div className='main'>
          { children }
        </div>
        
        { showFooter && <div className='footer'>
          <Button onClick={onClick} btnClass="btn-lg">
            Show more
          </Button>
        </div> }
      </div>
    </>
  )
}

Frame.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  showFooter: PropTypes.bool,
}

