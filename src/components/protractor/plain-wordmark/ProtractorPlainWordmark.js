import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './ProtractorPlainWordmark.svg'

/** ProtractorPlainWordmark */
function ProtractorPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="ProtractorPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

ProtractorPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default ProtractorPlainWordmark
