import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './InkscapePlainWordmark.svg'

/** InkscapePlainWordmark */
function InkscapePlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="InkscapePlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

InkscapePlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default InkscapePlainWordmark
