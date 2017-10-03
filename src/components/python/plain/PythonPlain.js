
import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './PythonPlain.svg'
import { normalizeUnit } from '../../utils.js'

/** PythonPlain */
function PythonPlain({width, height}) {
  return (
     <SVGInline
      classSuffix="-devicon"
      className="PythonPlain"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

PythonPlain.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
}

export default PythonPlain
