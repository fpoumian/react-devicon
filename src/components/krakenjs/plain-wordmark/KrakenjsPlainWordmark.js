import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './KrakenjsPlainWordmark.svg'

/** KrakenjsPlainWordmark */
function KrakenjsPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="KrakenjsPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

KrakenjsPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default KrakenjsPlainWordmark
