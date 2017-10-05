import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './BackbonejsPlainWordmark.svg'

/** BackbonejsPlainWordmark */
function BackbonejsPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BackbonejsPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

BackbonejsPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BackbonejsPlainWordmark
