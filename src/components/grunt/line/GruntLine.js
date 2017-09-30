import React from 'react'
import PropTypes from 'prop-types'
import SVGInline from 'react-svg-inline'
import iconSVG from './GruntLine.svg'
import { normalizeUnit } from '../../utils.js'

/** GruntLine */
function GruntLine({ width, height }) {
  return (
    <SVGInline
      classSuffix="-devicon"
      className="GruntLine"
      svg={iconSVG}
      width={normalizeUnit(width)}
      height={normalizeUnit(height)}
    />
  )
}

GruntLine.propTypes = {
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
}

export default GruntLine
