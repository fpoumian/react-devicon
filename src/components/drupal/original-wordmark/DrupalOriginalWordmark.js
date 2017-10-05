import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './DrupalOriginalWordmark.svg'

/** DrupalOriginalWordmark */
function DrupalOriginalWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="DrupalOriginalWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

DrupalOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default DrupalOriginalWordmark
