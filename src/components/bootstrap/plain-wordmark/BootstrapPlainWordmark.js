import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './BootstrapPlainWordmark.svg'

/** BootstrapPlainWordmark */
function BootstrapPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BootstrapPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

BootstrapPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BootstrapPlainWordmark
