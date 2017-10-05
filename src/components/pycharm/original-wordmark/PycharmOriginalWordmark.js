import React from 'react'
import PropTypes from 'prop-types'
import SVGDeviconInline from '../../_base/SVGDeviconInline'

import iconSVG from './PycharmOriginalWordmark.svg'

/** PycharmOriginalWordmark */
function PycharmOriginalWordmark({ width, height, className }) {
  return (
    <SVGDeviconInline
      className={'PycharmOriginalWordmark' + ' ' + className}
      iconSVG={iconSVG}
      width={width}
      height={height}
    />
  )
}

PycharmOriginalWordmark.propTypes = {
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PycharmOriginalWordmark
