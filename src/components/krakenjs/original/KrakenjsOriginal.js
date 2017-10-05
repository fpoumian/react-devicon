import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './KrakenjsOriginal.svg'

/** KrakenjsOriginal */
function KrakenjsOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="KrakenjsOriginal"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

KrakenjsOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default KrakenjsOriginal
