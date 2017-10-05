import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './AmazonwebservicesOriginal.svg'

/** AmazonwebservicesOriginal */
function AmazonwebservicesOriginal({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="AmazonwebservicesOriginal"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

AmazonwebservicesOriginal.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AmazonwebservicesOriginal
