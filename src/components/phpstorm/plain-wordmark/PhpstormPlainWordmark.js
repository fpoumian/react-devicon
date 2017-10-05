import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './PhpstormPlainWordmark.svg'

/** PhpstormPlainWordmark */
function PhpstormPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="PhpstormPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

PhpstormPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PhpstormPlainWordmark
