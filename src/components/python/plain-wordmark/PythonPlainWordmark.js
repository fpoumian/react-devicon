import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PythonPlainWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** PythonPlainWordmark */
function PythonPlainWordmark({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="PythonPlainWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PythonPlainWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default PythonPlainWordmark
