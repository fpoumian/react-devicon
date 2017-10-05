import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './AngularjsPlain.svg'

/** AngularjsPlain */
function AngularjsPlain({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="AngularjsPlain"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

AngularjsPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default AngularjsPlain
