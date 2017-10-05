import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './NodewebkitOriginal.svg'

/** NodewebkitOriginal */
function NodewebkitOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="NodewebkitOriginal"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

NodewebkitOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default NodewebkitOriginal
