import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './BackbonejsOriginal.svg'

/** BackbonejsOriginal */
function BackbonejsOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="BackbonejsOriginal"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

BackbonejsOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default BackbonejsOriginal
