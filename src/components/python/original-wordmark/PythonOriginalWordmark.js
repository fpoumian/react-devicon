
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PythonOriginalWordmark.svg'
import { normalizeUnit } from '../../utils.js'

/** PythonOriginalWordmark */
function PythonOriginalWordmark({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PythonOriginalWordmark"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PythonOriginalWordmark.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PythonOriginalWordmark
