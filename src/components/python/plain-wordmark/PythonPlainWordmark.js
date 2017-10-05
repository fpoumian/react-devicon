import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import normalizeCSSUnit from 'normalize-css-unit'

import iconSVG from './PythonPlainWordmark.svg'

/** PythonPlainWordmark */
function PythonPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="PythonPlainWordmark"
      svg={iconSVG}
      width={width ? normalizeCSSUnit(width) : ''}
      height={height ? normalizeCSSUnit(height) : ''}
    />
  )
}

PythonPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PythonPlainWordmark
