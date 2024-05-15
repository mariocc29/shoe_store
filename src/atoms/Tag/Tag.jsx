import React from 'react';
import PropTypes from 'prop-types'

import './Tag.styles.scss'

export const Tag = ({tagClass}) => {
  return (
    <>
      <div className={ `caption tag tag-${tagClass}` }>{ tagClass }</div>
    </>
  )
}

Tag.propTypes = {
  tagClass: PropTypes.oneOf(['standard', 'low', 'high']),
}