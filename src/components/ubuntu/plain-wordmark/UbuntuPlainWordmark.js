import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './UbuntuPlainWordmark.svg'

/** UbuntuPlainWordmark */
function UbuntuPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="UbuntuPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

UbuntuPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default UbuntuPlainWordmark
