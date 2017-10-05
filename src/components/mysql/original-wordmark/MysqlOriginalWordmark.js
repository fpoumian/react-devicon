import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './MysqlOriginalWordmark.svg'

/** MysqlOriginalWordmark */
function MysqlOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'MysqlOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

MysqlOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default MysqlOriginalWordmark
