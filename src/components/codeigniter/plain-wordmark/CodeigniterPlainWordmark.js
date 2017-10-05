import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './CodeigniterPlainWordmark.svg'

/** CodeigniterPlainWordmark */
function CodeigniterPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="CodeigniterPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

CodeigniterPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default CodeigniterPlainWordmark
