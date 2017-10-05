import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './VisualstudioPlainWordmark.svg'

/** VisualstudioPlainWordmark */
function VisualstudioPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="VisualstudioPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

VisualstudioPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default VisualstudioPlainWordmark
