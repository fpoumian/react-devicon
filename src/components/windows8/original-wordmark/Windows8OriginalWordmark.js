import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './Windows8OriginalWordmark.svg'

/** Windows8OriginalWordmark */
function Windows8OriginalWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="Windows8OriginalWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

Windows8OriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default Windows8OriginalWordmark
