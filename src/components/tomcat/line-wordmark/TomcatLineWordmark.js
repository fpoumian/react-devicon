import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './TomcatLineWordmark.svg'

/** TomcatLineWordmark */
function TomcatLineWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="TomcatLineWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

TomcatLineWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default TomcatLineWordmark
