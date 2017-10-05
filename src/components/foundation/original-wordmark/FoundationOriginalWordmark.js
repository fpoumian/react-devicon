import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './FoundationOriginalWordmark.svg'

/** FoundationOriginalWordmark */
function FoundationOriginalWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="FoundationOriginalWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

FoundationOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default FoundationOriginalWordmark
