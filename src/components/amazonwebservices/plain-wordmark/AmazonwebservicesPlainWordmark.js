import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './AmazonwebservicesPlainWordmark.svg'

/** AmazonwebservicesPlainWordmark */
function AmazonwebservicesPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="AmazonwebservicesPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

AmazonwebservicesPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AmazonwebservicesPlainWordmark
