import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './AngularjsPlainWordmark.svg'

/** AngularjsPlainWordmark */
function AngularjsPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="AngularjsPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

AngularjsPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AngularjsPlainWordmark
