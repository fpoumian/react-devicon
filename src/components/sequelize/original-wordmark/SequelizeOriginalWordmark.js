import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './SequelizeOriginalWordmark.svg'

/** SequelizeOriginalWordmark */
function SequelizeOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'SequelizeOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

SequelizeOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default SequelizeOriginalWordmark
