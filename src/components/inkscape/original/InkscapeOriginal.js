import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './InkscapeOriginal.svg'

/** InkscapeOriginal */
function InkscapeOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="InkscapeOriginal"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

InkscapeOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default InkscapeOriginal
