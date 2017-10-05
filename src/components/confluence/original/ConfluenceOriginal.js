import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './ConfluenceOriginal.svg'

/** ConfluenceOriginal */
function ConfluenceOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="ConfluenceOriginal"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

ConfluenceOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ConfluenceOriginal
