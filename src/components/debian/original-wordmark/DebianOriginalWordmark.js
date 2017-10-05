import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './DebianOriginalWordmark.svg'

/** DebianOriginalWordmark */
function DebianOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'DebianOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

DebianOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DebianOriginalWordmark
