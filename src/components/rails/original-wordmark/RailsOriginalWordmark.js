import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './RailsOriginalWordmark.svg'

/** RailsOriginalWordmark */
function RailsOriginalWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="RailsOriginalWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

RailsOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default RailsOriginalWordmark
