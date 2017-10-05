import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './DoctrineOriginalWordmark.svg'

/** DoctrineOriginalWordmark */
function DoctrineOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'DoctrineOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

DoctrineOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DoctrineOriginalWordmark
